import React from 'react'

function InstructionsComp(props){
    const {
        values,
        onInputChange
    } = props
    return (
        <label>Special Instructions:&nbsp;
            <input
            value={values.instructions}
            onChange={onInputChange}
            name='instructions'
            type='text'
            />
        </label>
    )
}
export default InstructionsComp