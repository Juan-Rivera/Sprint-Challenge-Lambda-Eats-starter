import React from 'react'

function SizeComp(props) {
    const {
      values,
      onInputChange,
    } = props
    return(
        <label>Choice of Size:&nbsp;
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
        </label>
    )
}
export default SizeComp