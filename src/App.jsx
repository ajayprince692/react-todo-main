import React, { useState } from 'react'
import TopBar from './Components/TopBar'



function App() {
  let [todo,setTodo]=useState([
    {
    id:1,
    title:" Office Task-1",
    description:"F for task-1",
    status:false

  },
  {
    id:2,
    title:" Office Task-2",
    description:"S for task-2",
    status:false
    
  },
  {
    id:3,
    title:" Office Task-3",
    description:"T for task-3",
    status:false
    
  }
])
let [completed,setCompleted]=useState("All")
  return <>
  <TopBar todo={todo} setTodo={setTodo} completed={completed} setCompleted={setCompleted}/>
  </>
}

export default App