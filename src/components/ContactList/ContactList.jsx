import React from "react";


const ContactList = ({toRender, deleteContact}) => (
    <ul className="contactList">
        {toRender.map((person) => {
            return ( <li key={person.id}> {person.name}
            <button onClick={() => {deleteContact(person.id)}}>Delete</button>
             </li>)
        })}
    </ul>
)

export default ContactList