import React from 'react';
import '../styles.css'

const ContactCard = ({contact,deleteContact,handleEditContact}) => {

    const handleEdit = (contact)=>{
        handleEditContact(contact)
    }

    const handleDelete = (contact)=>{
        deleteContact(contact)
    }
    return (

        <div className='card'>
                <div className='leftProfileAndDesc'>
                    <img className='profileImg' src={contact.image} alt=""/>
                    <p>{contact.desc}</p>
                </div>

                <div className='centerDescription'>
                    <h3>{contact.fullName}</h3>
                    <p className='contactLocation'><i className="fas fa-map-marker-alt"/> {contact.address}</p>
                    <span><b>{contact.company}</b></span>
                    <br/>
                    <span>{contact.fullAddress}</span>
                    <br/>
                    <span>{contact.phoneNum}</span>
                </div>

                <div className='editDeleteIcons'>
                    <i className="fas fa-pen" onClick={()=>handleEdit(contact)}/>
                    <i className="fas fa-trash-alt" onClick={()=>handleDelete(contact)}/>
                </div>
        </div>
    );
};

export default ContactCard;
