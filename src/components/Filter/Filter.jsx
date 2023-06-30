import css from './Filter.module.css';

export const Filter = ({ handelInput }) => {
  return (
    <div className={css.filter}>
      <h2 className={css.title}>Filter contact</h2>
      <input
        className={css.input}
        onChange={handelInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
