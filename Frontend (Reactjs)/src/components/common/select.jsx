 import React from 'react'

const Select = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{ props.label }</label>
            <select value={ props.value } onChange={props.onChange} id={props.name} name={props.name} className="form-control">
                <option value=""/>
                {props.options.map(option => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>       
    ); 
}

export default Select;
