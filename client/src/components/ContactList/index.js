import React from 'react'
import ContactCard from '../ContactCard'

const ContactList = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id)
  }
  const renderContacts = contacts.map(({ id, name, email}) => (
      <ContactCard key={id} id={id} name={name} email={email} clickHandler={deleteContactHandler} />
  ))
  return (
    <div className='ui celled list'>{renderContacts}</div>
  )
}

export default ContactList