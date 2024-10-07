import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contactsSlice";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && "Loading ..."}
      {error && !loading && "Something went wrong"}
      <ContactList />
    </>
  );
}

export default App;
