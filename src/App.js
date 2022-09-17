import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
  };

  controlInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  addContact = ({ name, phone }) => {
    const { contacts } = this.state;
    const contactItem = {
      id: nanoid(),
      name,
      phone,
    };

    const repeatedName = contacts.find(person => {
      return person.name === name
    })

    !repeatedName?(this.setState(({ contacts }) => {
      return {
        contacts: [contactItem, ...contacts],
      }
    }))
    : alert(`${name} is already in contacts`)
  };

  findContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFiler = filter.toLowerCase();

    return contacts.filter(person =>
      person.name.toLowerCase().includes(normalizedFiler)
    );
  };

  deleteContact = (contactIdToDelete) => {
    const {contacts} = this.state

    const leftContacts = contacts.filter(contactItem => (
      contactItem.id !== contactIdToDelete 
    ))
    this.setState(
      {contacts: leftContacts}
    )
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.findContact();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} ></ContactForm>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.controlInput}></Filter>
        <ContactList toRender={visibleContacts} deleteContact={this.deleteContact}></ContactList>
      </div>
    )
  }

}

export default App
