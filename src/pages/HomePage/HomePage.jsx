import React, { useEffect, useState } from 'react';
import './homepage.css'
import axios from 'axios';


const HomePage = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState([])

    const filteredContacts = contacts.filter(contact => (
        contact.name.toLowerCase().includes(search.toLowerCase().trim())
    ))


    const addContact = (e) => {

        const newContact = {
            name,
            phone
        }

        axios.post("http://localhost:3001/contacts", newContact)

    }

    useEffect(() => {
        axios.get("http://localhost:3001/contacts")
            .then(res => setContacts(res.data))
    }, [])

    return (
        <>
            <form className="addContact" onSubmit={addContact}>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='name...' />
                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" placeholder='phone number...' />
                <button type='submit'>ADD NEW CONTACT</button>
            </form>
            <div className='content'>
                <input
                    type="text"
                    placeholder='search...'
                    style={{ padding: "5px" }}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {
                    filteredContacts.map((contact) => (
                        <>
                            <h2>
                                {contact.name}
                            </h2>
                            <h3>
                                {contact.phone}
                            </h3>
                        </>
                    ))
                }
            </div>
        </>
    );
};

export default HomePage;