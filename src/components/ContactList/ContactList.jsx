import React from "react";

import css from 'components/styles.module.scss'

const ContactList = ({toRender, deleteContact}) => (
    <ul >
        {toRender.map((person) => {
            return ( <li className={css.contact} key={person.id}> 
            <span className={css.personName}>{person.name}</span>
            <button className={css.deleteBtn} onClick={() => {deleteContact(person.id)}}>Delete</button>
             </li>)
        })}
    </ul>
)

export default ContactList