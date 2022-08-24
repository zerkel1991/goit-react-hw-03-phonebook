import PropTypes from 'prop-types';
import style from './filter.module.css'


const Filter = ({name,type,pattern,value,onChangeFilter}) =>{

  return(
    <label> Find contacts by name
      <input className={style.input}type={type} name={name}  value = {value} pattern = {pattern} onChange={onChangeFilter}/>
    </label>

    )
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  pattern: PropTypes.string,
};



export default Filter
