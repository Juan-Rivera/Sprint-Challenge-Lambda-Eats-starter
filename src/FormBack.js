import React from 'react'

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
          <label><h2>Name: </h2></label>
            <div className='inputs'>
              <input
              value={values.name}
              onChange={onInputChange}
              name='name'
              type='text'
              />
            </div>

        {/* Choice of Size*/}
          <label><h2>Choice of Size:</h2></label>
            <div className='inputs'>
              <select
              
                  value={values.size}
                  onChange={onInputChange}
                  name='size'
              >
                <option defaultValue=''>Select</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
              </select>
            </div>
        {/* Choice of Sauce*/}
          <label><h2>CHoice of Sauce:</h2></label>
            <div className='radiobuttons'>
              <input onChange={onInputChange} type='radio' id='originalRed' name='sauce' value='originalRed'/> Original Red
              <input onChange={onInputChange}  type='radio' id='garlicRanch' name='sauce' value='garlicRanch'/> Garlic Ranch
              <input onChange={onInputChange}  type='radio' id='bbqSauce' name='sauce' value='bbqSauce'/> BBQ Sauce
              <input onChange={onInputChange}  type='radio' id='spinachAlfredo' name='sauce' value='spinachAlfredo'/> Spinach Alfredo
            </div>


        {/* Toppings */}
          <label><h2>Add Toppings:</h2></label>
            <div className='toppingsC'>
              <div className='t1'>
              <input
              checked={values.toppings.pepperoni}
              onChange={onCheckboxChange}
              name='pepperoni'
              type="checkbox" />Pepperoni
              </div>

              <div className='t2'>
              <input
              checked={values.toppings.onions}
              onChange={onCheckboxChange}
              name='onions'
              type="checkbox" />Onions
              </div>

              <div className='t3'>
              <input
              checked={values.toppings.peppers}
              onChange={onCheckboxChange}
              name='peppers'
              type="checkbox" />Peppers
              </div>

              <div className='t4'>
              <input
              checked={values.toppings.olives}
              onChange={onCheckboxChange}
              name='olives'
              type="checkbox" />Olives
              </div>
            </div>

        {/* Special Instructions */}
        <label><h2>Special Instructions:</h2></label>
          <div className='inputs'>
            <input
            value={values.instructions}
            onChange={onInputChange}
            name='instructions'
            type='text'
            />
          </div>

      {/* Submit Button */}
      <button onClick={onSubmit} disabled={disabled}>submit</button>
    </form>
  )
}

export default Form
