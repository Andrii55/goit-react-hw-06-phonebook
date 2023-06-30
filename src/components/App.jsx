import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const isExsist = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      alert('Contact olredy exsist');
      return;
    }
    this.setState(preveState => ({
      contacts: [...preveState.contacts, { name, number, id: nanoid() }],
    }));
  };

  componentDidMount() {
    const storageDate = localStorage.getItem('contacts');
    if (storageDate) {
      this.setState({ contacts: JSON.parse(storageDate) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  delitContact = id => {
    this.setState(preveState => ({
      contacts: preveState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handelInput = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filteredContact = this.getFilteredContacts();
    return (
      <div>
        <ContactForm addContact={this.addContact} />
        <Filter handelInput={this.handelInput} />
        <ContactList
          contacts={filteredContact}
          delitContact={this.delitContact}
        />
      </div>
    );
  }
}
