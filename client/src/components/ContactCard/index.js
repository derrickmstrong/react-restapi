import React from 'react'

const ContactCard = ({ id, name, email, clickHandler}) => {
  return (
    <div className='item'>
      <i className='user icon'></i>
      <div className='content'>
        <div className='header'>{name}</div>
        <div>{email}</div>
      </div>
      <i className='trash alternate outline icon red right floated' style={{marginTop: '-23px'}} onClick={() => clickHandler(id)}></i>
    </div>
  );
}

export default ContactCard