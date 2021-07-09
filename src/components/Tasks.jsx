import React from 'react';

const Tasks = (props) => {
    const active = props.activeTasks.filter(task => !task.done)
    const done = props.activeTasks.filter(task => task.done)
    const activetasks = active.map(task => (
        
        
        <>
       
        <div className="task" key={task.id}>
         <span className="tasks"><b>{task.taskInfo} </b> <em className="tasks">  Wykonac do {task.deadline}</em> <button className="tasks" onClick={()=>props.handleDoneTask(task.id)}>Done</button> <button className="tasks" onClick={()=>props.handleDeleteTask(task.id)}>X</button>  </span><br/>
         </div>
        </>
        
    ))
     const doneTasks = done.map(task => (
         <>
         <div className="task" key={task.id}>
         <span className="tasks"><b>{task.taskInfo} </b> <em className="tasks">  zrobione {task.fromdate}</em> <button className="tasks" onClick={()=>props.handleDeleteTask(task.id)}>X</button> </span> <br/>
         </div>
         </>
     ))
    return (  
        <>
        <div className="activeTasks">
            {active.length>0 ?  <h1 >Zadania do wykonania</h1> : null }
        {activetasks.reverse()}
        {done.length>0  ? <h1 className="done" >Zadania zrobione</h1> : null}
        {doneTasks.reverse()}
        </div>
        </>
    );
}
 
export default Tasks;