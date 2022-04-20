import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

const App = () => {
  const [contacts, setContacts] = useState([])
  // Add new contact from AddContact form to contacts
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuidv4(), ...contact}])
  }
  // Remove contact
  const removeContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)
  }
  const LOCAL_STORAGE_KEY = "contacts"
  // On refresh, Grab contacts from localStorage and display
  useEffect(() => { 
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts) setContacts(retrieveContacts)
   }, [])
  // Hold/Persist contacts in localStorage
  useEffect(() => { 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
   }, [contacts])
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
