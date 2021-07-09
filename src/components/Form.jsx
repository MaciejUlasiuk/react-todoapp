import React from 'react';
import { useState } from 'react';
const Form = (props) => {
    const {value,handleAddTask,handleInputValue,date, handleDate} = props
    console.log(new Date().toLocaleString().slice(0,9))
    return ( 
        <>
        
        <form>
            <input type="text" value={value} onChange={handleInputValue} placeholder="Dodaj zadanie"></input> 
           <span>Wykonac do</span>   <input type="date" value={date} onChange={handleDate}/> <button onClick={handleAddTask}>Dodaj</button>
        </form>
        </>
     );
}
 
export default Form;