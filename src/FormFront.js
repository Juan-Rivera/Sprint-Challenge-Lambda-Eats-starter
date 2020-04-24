import React, { useState, useEffect } from "react";
import Form from './FormBack';
import axios from 'axios'
import * as yup from 'yup'

const url = 'http://reqres.in/api/users'

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    onions: false,
    peppers: false,
    olives: false,
  },
  instructions: '',
}

const initialFormErrors = {
    name: '',
    size: '',
    toppings: '',
}

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
    size: yup
        .string()
        .matches(/(small|medium|large)/, 'Please choose a size')
        .required('Size is required'),
    instructions: yup
        .string()
})

const FormComp = () => {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [post, setPost] = useState([]);

  const getOrders = () => {
    axios.get(url)
      .then(res => {
        setOrders(res.data)
      })
      .catch(err => {
        debugger
      })
  } 

  useEffect(() => {
    getOrders()
  }, []) 

  const postOrder = order => {
    axios.post(url, order)
      .then(res => {
       setPost([...res.data, orders])
      })
      .catch(err => {
        debugger
      })

  } 

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => { 
        setFormDisabled(!valid)
      })
  }, [formValues])

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      topings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true),
      instructions: formValues.instructions,
    }
    //setOrders(newOrder)
    postOrder(newOrder)
    setFormValues(initialFormValues)
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }
  return (
    <div>
      <header><h1>Build Your Own Pizza</h1></header>
        <Form 
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          disabled={formDisabled}
          errors={formErrors}
        />
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};
export default FormComp;
