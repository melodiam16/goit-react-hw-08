import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("This field is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div className={css.cont}>
          <Form className={css.form} autoComplete="off">
            <label className={css.label}>
              Email
              <Field
                type="email"
                name="email"
                autoComplete="email"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </label>

            <label className={css.label}>
              Password
              <Field
                type="password"
                name="password"
                autoComplete="current-password"
                className={css.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className={css.button}
            >
              Log In
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
