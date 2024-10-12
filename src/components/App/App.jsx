import "./App.module.css";

import Layout from "../Layout/Layout";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../page/Home/Home";
import RegistrationPage from "../../page/RegistrationPage/RegistrationPage";
import LoginPage from "../../page/LoginPage/LoginPage";
import ContactsPage from "../../page/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  const isRefreching = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreching ? (
    <b>Please wait, updating user info...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts/*"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
