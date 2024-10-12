import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contactContainer}>
      <div className={css.contactEl}>
        <p className={css.contactText}>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.contactBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
