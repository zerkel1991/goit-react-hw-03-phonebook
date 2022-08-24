import s from './ContactList.module.css'
import PropTypes from 'prop-types';
const ContactList = ({items,deleteContact}) =>{

  return(

    <ul>
      {items.map(el =>(
       <li key = {el.id}>
        <span className={s.span}>{el.name} : </span>
        <span>{el.number}</span>
        <button onClick={()=> deleteContact(el.id)}>Удалить</button>
       </li>
      ))}
    </ul>



  )
}
ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};




export default ContactList
