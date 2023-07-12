import css from "./App.module.css"
import ContactForm from "./ContactForm";
import { ContactList } from "./ContactList"

import { Component } from "react";
import { nanoid } from "nanoid";

class App extends Component{
 state = {
  contacts: [],
  filter: ''
  }
  
  addContact = contact => {
    
    this.setState(prev => {
      // prev.contacts.push({ id: nanoid(), ...contact })
      return { contacts: [ ...prev.contacts, {id: nanoid(), ...contact }]  }
    })
  }
  
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={values => this.addContact(values)}/>

        <h2 className={css.title}>Contacts</h2>
        {this.state.contacts && <ContactList contacts={this.state.contacts}/>}
      </div>
    )
  }
  
}

export default App