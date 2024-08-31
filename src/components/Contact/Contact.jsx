import css from "./Contact.module.css";
export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactEl}>
        <p className={css.contactText}>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.contactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
