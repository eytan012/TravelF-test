import React, {useState, useEffect} from 'react';
import '../styles.css'
import axios from "axios";

const ContactForm = ({addContact, isEdit, contactToEdit, setContactToEdit, addEditedContact}) => {

    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [company, setCompany] = useState('')
    const [fullAddress, setFullAddress] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [desc, setDesc] = useState('')

    // const api = `https://maps.googleapis.com/maps/api/geocode/json?address=${fullAddress + address}&key=MY_API_KEY`

    useEffect(() => {
        if (contactToEdit) {
            setFullName(contactToEdit.fullName)
            setAddress(contactToEdit.address)
            setCompany(contactToEdit.company)
            setFullAddress(contactToEdit.fullAddress)
            setDesc(contactToEdit.desc)
            setPhoneNum(contactToEdit.phoneNum)
        }
    }, [contactToEdit])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isEdit) {
            const contactObj = {
                fullName,
                address,
                company,
                desc,
                fullAddress,
                phoneNum,
                id: Date.now(),
                image: '../assets/sandra smith.jpg',
            }
            addContact(contactObj)
            clearState()
        } else {
            const editedObj = {
                fullName,
                address,
                company,
                desc,
                fullAddress,
                phoneNum,
                id: contactToEdit.id,
                image: contactToEdit.id
            }
            setContactToEdit(editedObj)
            addEditedContact(editedObj)
        }
    }


    const clearState = () => {
        setFullName('')
        setAddress('')
        setCompany('')
        setFullAddress('')
        setPhoneNum('')
        setDesc('')
    }

    return (
        <form onSubmit={handleSubmit} className='addContactForm'>
            Full Name: <input required type="text" onChange={(e) => setFullName(e.target.value)} value={fullName}/>
            {/*Address: <input required type="text" onChange={(e)=>setAddress(e.target.value)} value={address}/>*/}
            Company: <input required type="text" onChange={(e) => setCompany(e.target.value)} value={company}/>
            Job Description:<input required type="text" onChange={(e) => setDesc(e.target.value)} value={desc}/>
            City and Country: <input required type="text" onChange={(e) => setFullAddress(e.target.value)}
                                     value={fullAddress} placeholder={'Country and City'}/>
            Street And number: <input required type="text" onChange={(e) => setAddress(e.target.value)} value={address}
                                      placeholder={'Street name & number'}/>
            Phone Number: <input required type="text" pattern={'^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$'} onChange={(e) => setPhoneNum(e.target.value)} value={phoneNum}/>
            <button className='addBtn' type={"submit"}>{isEdit ? 'Edit Contact' : 'Add Contact'}</button>
        </form>

    )
};

export default ContactForm;
