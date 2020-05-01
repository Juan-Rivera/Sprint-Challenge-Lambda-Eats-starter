import React from 'react'

function ToppingComp(props) {
    const {
      values,
      onCheckboxChange,
    } = props

    return (
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
    )
}