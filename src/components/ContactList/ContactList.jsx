import React from "react";
import PropTypes from 'prop-types';

import css from 'components/styles.module.scss'

const ContactList = ({toRender, deleteContact}) => (
    <ul >
        {toRender.map((person) => {
            return ( <li className={css.contact} key={person.id}> 
            <span className={css.personName}>{person.name}: {person.phone}</span>
            <button className={css.deleteBtn} onClick={() => {deleteContact(person.id)}}>Delete</button>
             </li>)
        })}
    </ul>
)

ContactList.propTypes = {
    toRender: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }
    ))
}

export default ContactList