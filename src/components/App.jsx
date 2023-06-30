import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
const InisialState = [];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || InisialState
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const isExsist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      alert('Contact olredy exsist');
      return;
    }
    setContacts(preveState => [...preveState, { name, number, id: nanoid() }]);
  };

  const delitContact = id => {
    setContacts(preveState => preveState.filter(contact => contact.id !== id));
  };

  const handelInput = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContact = getFilteredContacts();
  return (
    <div>
      <ContactForm addContact={addContact} />
      <Filter handelInput={handelInput} />
      <ContactList contacts={filteredContact} delitContact={delitContact} />
    </div>
  );
};
