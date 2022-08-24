import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./Contacts/ContactList";
import Filter from "./Contacts/Filter";
import React from "react";
import { Component } from "react";
import { nanoid } from "nanoid";

class App extends Component {

    state = {
    contacts: [],
    filter: ''
  }

componentDidMount(){
  const localContacts = localStorage.getItem('contacts');
  const parsedLocalContacts = JSON.parse(localContacts);
  if(parsedLocalContacts){
    this.setState({contacts : parsedLocalContacts })
  }
}

componentDidUpdate(prevProps,prevState){
  if(this.state.contacts !== prevState.contacts){
    localStorage.setItem('contacts',JSON.stringify(this.state.contacts))

  }

}



    addContact = (data) =>{
      const {contacts} = this.state;
      const isDublicate = contacts.find(item =>item.name === data.name)
      if(isDublicate){
         return alert (`${data.name} is already in contacts`)
      }
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        ...data
      };
       return {
        contacts: [...prevState.contacts, newContact]
       }
    })
  }

  onChangeFilter = (e) =>{
  const {name,value} = e.currentTarget
  this.setState({[name] :value})
}

getFilteredContacts = () =>{
  const {filter,contacts} = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
}



deleteContact = (id)=>{
  this.setState(({contacts})=>{
    const newContactList = contacts.filter(item => item.id !==id)
    return {
      contacts : newContactList
    }
  })
}


  render() {

    const {addContact,onChangeFilter,deleteContact} = this;
    const {filter} = this.state;
    const filteredContacts = this.getFilteredContacts()
    return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit = {addContact}/>

      <h2>Contacts</h2>
      <Filter type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value = {filter}
      onChangeFilter = {onChangeFilter}
  />
      <ContactList items = {filteredContacts} deleteContact ={deleteContact}/>
    </div>
      )
  }

}

export default App
