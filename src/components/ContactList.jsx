import css from './ContactList.module.css'
import PropTypes from "prop-types";

export const ContactList = ({ contacts }) => {
    return (
        <ul className={css.list}>
            {contacts.map(contact => {
                const { id, name, number } = contact;
                return <ContactItem key={id} name={name} number={number}/>
            })}
        </ul>
    )
    
}

const ContactItem = ({ name, number }) => {
    return (
        <li className={css["list-item"]}>
          {name}: {number}  
        </li>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}