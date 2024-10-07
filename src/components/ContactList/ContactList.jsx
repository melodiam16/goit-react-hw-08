import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  // const selectContacts = useSelector((state) => state.contacts.items);
  // const filters = useSelector((state) => state.filters.name);

  // const contactsFilter =
  //   selectContacts &&
  //   selectContacts.filter((value) =>
  //     value.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
  //   );
  const allUsersWithFiltred = useSelector(selectFilteredContacts);

  return (
    <ul className={css.boxContacts}>
      {allUsersWithFiltred.map((item) => (
        <li key={item.id}>
          <Contact id={item.id} name={item.name} number={item.number} />
        </li>
      ))}
    </ul>
  );
}
