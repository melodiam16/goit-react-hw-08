export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
