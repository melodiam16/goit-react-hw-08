import { Formik, Field, Form } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
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
        <Form>
          <div>
            <label htmlFor={`${id}-name`}>Name</label>
            <Field type="text" name="username" id={`${id}-name`} />
            <ErrorMessage name="username" component="span" />
          </div>
          <div>
            <label htmlFor={`${id}-number`}>Number</label>
            <Field type="text" name="number" id={`${id}-number`} />
            <ErrorMessage name="number" component="span" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
