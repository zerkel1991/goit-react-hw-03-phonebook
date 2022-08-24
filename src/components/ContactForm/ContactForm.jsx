import React from "react";
import { Component } from "react";
import style from './contactForm.module.css'
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }
handleStateChangeFromInput = e =>{
  const {name,value} = e.currentTarget
  this.setState({[name] :value})
}

handleSubmit = e =>{
  e.preventDefault()
  const {onSubmit} = this.props;
  onSubmit({...this.state})
  this.reset();
}

reset(){
  this.setState({
    name : '',
    number : ''
  })


}
  render() {
    const {handleSubmit,handleStateChangeFromInput} = this;

    return(
      <form onSubmit={handleSubmit}>
        <label> Name
  <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value = {this.state.name}
  onChange = {handleStateChangeFromInput}

/>
</label>
<label className={style.label}> Phone
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value = {this.state.number}
  onChange = {handleStateChangeFromInput}
/>
</label>

<button type="submit">Добавить</button>
</form>


 );};;

    }

    ContactForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };


export default ContactForm
