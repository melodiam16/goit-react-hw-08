import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      className={css.container}
    >
      {() => (
        <div className={css.cont}>
          <Form className={css.form} autoComplete="off">
            <label className={css.label}>
              Username
              <Field
                type="text"
                name="name"
                autoComplete="name"
                className={css.input}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </label>
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
            <button type="submit" className={css.button}>
              Register
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
