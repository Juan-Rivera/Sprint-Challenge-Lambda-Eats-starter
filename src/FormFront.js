import React, { useState, useEffect } from "react";
import Form from './FormBack';
import axios from 'axios'
import * as yup from 'yup'


const url = 'https://reqres.in/api/users_'

const initialOrders = [
    {
        name: 'Test',
        size: 'medium',
        toppings: [
            'pepperoni',
            'olives',
        ],
        instructions: 'none',
    }
]


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
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
    sauce: yup
        .string()
        .matches(/(originalRed|garlicRanch|bbqSauce|spinachAlfredo)/, 'Please choose a sauce')
        .required('Sauce is required'),
    instructions: yup
        .string()
})

const FormComp = () => {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [post, setPost] = useState([]);
  const [activeOrder, setActiveOrder] = useState([])
    //FORM VALIDATION
    useEffect(() => {
        formSchema.isValid(formValues)
          .then(valid => { 
            setFormDisabled(!valid)
          })
      }, [formValues])

    //POSTS THE ORDER TO API
    const postOrder = order => {
        axios.post(url, order)
            .then(res => {
                setPost([...orders, res.data.data])
            })
            .catch(err => {
                debugger
            })
        }

    useEffect(() =>{
      postOrder();
    }, [])
   
      
    //INPUT CHANGE
    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        //VALIDATES EACH FORM VALUE
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

        setFormValues({...formValues, [name]: value})
    }
    //CHECK BOX CHANGE 
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

    
  //SUBMIT
  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true),
      instructions: formValues.instructions,
    }
    setOrders([ ...orders, newOrder ])
    setActiveOrder(newOrder);
    postOrder(newOrder)
    setFormValues(initialFormValues)
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
        <pre>{JSON.stringify(activeOrder, null, 2)}</pre> 
    </div>
  );
};
export default FormComp;
