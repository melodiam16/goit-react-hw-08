import { Formik, Field, Form } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be in the format XXX-XX-XX")
    .min(3, "Too Short!")
    .max(50, "Too Long!")

    .required("Required"),
});

const initialValues = {
  username: "",
  number: "",
};
export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });
    actions.resetForm();
  };

  const id = useId();
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor={`${id}-name`}>Name</label>
            <Field type="text" name="username" id={`${id}-name`} />
            <ErrorMessage
              name="username"
              component="span"
              className={css.error}
            />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={`${id}-number`}>Number</label>
            <Field type="text" name="number" id={`${id}-number`} />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
