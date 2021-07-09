import React from 'react';
 import { useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';


const Main = () => {
    const [value, setValue] = useState('');
    const [activeTasks, setactiveTasks] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().slice(0,10))
    
    const handleInputValue = (e) => {
        setValue(e.target.value)
      }
    
  const handleAddTask = (e) => {
    
    console.log(date)
    e.preventDefault()
      if(value === '') alert('Podaj zadanie')
      else if(date === undefined) alert('Podaj date')
      
      else {
      
    setactiveTasks(oldArray =>[...oldArray, {
        id: activeTasks.length,
        fromdate: new Date().toLocaleString(),
        taskInfo: value,
        deadline: date,
        done: false,
    }])
    setValue('')
}}
    
  const  handleDeleteTask = (id) => {
      const index = activeTasks.findIndex(task => task.id === id);
      console.log(index)
      const tasks = [...activeTasks]
      tasks.splice(index,1);
      setactiveTasks(tasks)
  }

  const handleDoneTask = (id) => {
    const index = activeTasks.findIndex(task => task.id === id)
    const tasks = [...activeTasks];
    tasks[index] = {...tasks[index],
      id: activeTasks.length,
        fromdate: new Date().toLocaleString(),
        
        deadline: date,
        done: true,
    };

   console.log(index)
    setactiveTasks(tasks)
    
  }
    
  
   const handleDate = (e) => {
    setDate(e.target.value)
       
   }
   
   
    return ( 

        <>
        <div className="main">
        <Form value ={value} handleInputValue={handleInputValue} activeTasks={activeTasks} date={date} handleAddTask={handleAddTask} handleDate={handleDate}/>
        <Tasks activeTasks={activeTasks} handleDoneTask={handleDoneTask} handleDeleteTask={handleDeleteTask} />
        
        </div>
        </>
     );
}
 
export default Main;