import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContact = getFilteredContacts();
  return (
    <ul className={css.list}>
      {filteredContact.map(({ name, number, id }) => (
        <li key={id}>
          <p className={css.items}>Name: {name}</p>
          <p className={css.items}>Number: {number}</p>
          <button
            className={css.btn}
            onClick={() => dispatch(deleteContact(id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
