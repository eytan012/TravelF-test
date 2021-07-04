import React, {useState} from 'react';
import './styles.css'
import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";


const ContactsPage = () => {
    const [contacts, setContacts] = useState([
        {
            fullName: 'John Smith',
            address: 'Riviera State 32/136',
            company: 'Twitter, Inc',
            fullAddress: '795 Folsom Ave, Suite 600 San Fransisco CA 94107',
            phoneNum: '(123) 456-7890',
            desc: 'Graphics designer',
            image: '../assets/john-smith.jpg',
            id: 1
        },
        {
            fullName: 'Alex Johnatan',
            address: 'Riviera State 32/136',
            company: 'Twitter, Inc',
            fullAddress: '795 Folsom Ave, Suite 600 San Fransisco CA 94107',
            phoneNum: '(123) 456-7890',
            desc: 'Manager',
            image: '../assets/alex jonathan.jpg',
            id: 2
        },
        {
            fullName: 'Sandra Smith',
            address: 'Riviera State 32/136',
            company: 'Twitter, Inc',
            fullAddress: '795 Folsom Ave, Suite 600 San Fransisco CA 94107',
            phoneNum: '(123) 456-7890',
            desc: 'Marketing Manager',
            image: '../assets/sandra smith.jpg',
            id: 3
        },
    ])
    const [contactToEdit, setContactToEdit] = useState(null)
    const [isShown, setIsShown] = useState(false)
    const [isEdit, setIsEdit] = useState(false)



    const addContact = (contactObj) => {
        setContacts([...contacts, contactObj])
        setIsShown(!isShown)
    }

    const deleteContact = (contactObj) => {
        const filteredContactsArray = contacts.filter(contact => {
            return contactObj.id !== contact.id
        })
        setContacts([...filteredContactsArray])
    }

    const handleEditContact = (contact) => {
        setContactToEdit(contact)
        setIsShown(true)
        setIsEdit(!isEdit)
    }

    const addEditedContact = (editedObj) => {
        const editedContacts = contacts.find((contact) => {
            return editedObj.id === contact.id
        })
        editedContacts.fullName = editedObj.fullName
        editedContacts.address = editedObj.address
        editedContacts.company = editedObj.company
        editedContacts.fullAddress = editedObj.fullAddress
        editedContacts.desc = editedObj.desc
        editedContacts.phoneNum = editedObj.phoneNum
        setContacts([...contacts])
        setIsEdit(!isEdit)
        setIsShown(!isShown)

    }


    return (
        <>
            <div className='container'>
                {
                    contacts.map((contact, i) => {
                        return <ContactCard key={i} contact={contact} deleteContact={deleteContact}
                                            handleEditContact={handleEditContact}/>
                    })
                }

            </div>
            <div className='addContact'>
                <i className="addIcon fas fa-plus" style={{fontSize: '2rem', color: 'teal'}}
                   onClick={() => setIsShown(!isShown)}/>
                {isShown ? <ContactForm addContact={addContact}
                                        isEdit={isEdit}
                                        contactToEdit={contactToEdit}
                                        setContactToEdit={setContactToEdit}
                                        addEditedContact={addEditedContact}

                /> : null}
            </div>
        </>
    );
};

export default ContactsPage;
