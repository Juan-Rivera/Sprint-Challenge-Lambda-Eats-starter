import React from 'react'
import SizeComp from './Form Components/SizeComp'
import InstructionsComp from './Form Components/InstructionsComp'

function Form(props) {
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    disabled,
    errors,
  } = props

  return (
    <form className='container'>
        {/* ERRORS */}
        <div className='errors'>
            <p>{errors.name}</p>
            <p>{errors.size}</p>
        </div>

        {/* Name */}
        <label>Name:&nbsp;
            <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
            />
        </label>

        {/* Choice of Size*/}
        {/* <label>Choice of Size:&nbsp;
        <select
        
            value={values.size}
            onChange={onInputChange}
            name='size'
        >
          <option defaultValue=''>Select</option>
          <option value='small'>Small</option>
          <option value='small'>Medium</option>
          <option value='small'>Large</option>
        </select>
        </label>
 */}
        <SizeComp values={values} onInputChange={onInputChange}/>
        {/* Toppings */}
        <label>
            <input
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
            name='pepperoni'
            type="checkbox" />Pepperoni
        </label>
        <label>
            <input
            checked={values.toppings.onions}
            onChange={onCheckboxChange}
            name='onions'
            type="checkbox" />Onions
        </label>
        <label>
            <input
            checked={values.toppings.peppers}
            onChange={onCheckboxChange}
            name='peppers'
            type="checkbox" />Peppers
        </label>
        <label>
            <input
            checked={values.toppings.olives}
            onChange={onCheckboxChange}
            name='olives'
            type="checkbox" />Olives
        </label>

        {/* Special Instructions */}
        {/* <label>Special Instructions:&nbsp;
            <input
            value={values.instructions}
            onChange={onInputChange}
            name='instructions'
            type='text'
            />
        </label> */}
      <InstructionsComp values={values} onInputChange={onInputChange}/>

    

      {/* Submit Button */}
      <button onClick={onSubmit} disabled={disabled}>submit</button>
    </form>
  )
}

export default Form
