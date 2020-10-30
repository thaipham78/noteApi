import React from 'react';
import Button from 'react-bootstrap/Button'
const Input=(props)=>{
    return(
    <form className="form" onSubmit={props.submit}>
      <input style={{height:"37px"}} type="text" name="description" value={props.value}  onChange={props.change}/>
      <Button variant="primary" type="submit">ADD</Button>
    </form>
    )
}

export default Input;