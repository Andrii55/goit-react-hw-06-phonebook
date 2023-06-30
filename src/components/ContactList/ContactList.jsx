import css from './ContactList.module.css';

export const ContactList = ({ contacts, delitContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p className={css.items}>Name: {name}</p>
          <p className={css.items}>Number: {number}</p>
          <button
            className={css.btn}
            onClick={() => delitContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
