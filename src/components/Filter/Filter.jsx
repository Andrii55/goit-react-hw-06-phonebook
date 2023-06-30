import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <h2 className={css.title}>Filter contact</h2>
      <input
        className={css.input}
        onChange={e => dispatch(addFilter(e.target.value))}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
