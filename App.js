import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks,setTasks]= useState([
        {
        id:1,
        text:"Task 1",
        day:'Oct 5 at 9:30 pm',
        reminder:true
        },
        {
        id:2,
        text:"Task 2",
        day:'Feb 4 at 5:30 pm',
        reminder:true
        },
        {
        id:3,
        text:"Task 3",
        day:'Feb 9 at 6:30 pm',
        reminder:true
        }
])
//add task
const addTask = (task) =>{
  const id = Math.floor(Math.random()*10000)+1
const newTask = {id,...task}
setTasks([...tasks,newTask])
}
//delete tasks
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id))
}
//toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=> task.id === id ? {...task,reminder:
    !task.reminder}: task))
    }
  return (
    <div className="container">
      <Header onAdd={()=> 
        setShowAddTask
        (!showAddTask)} showAdd={showAddTask} />
         
      {showAddTask &&<AddTask  onAdd={addTask}/>}
      {tasks.length >0 ?(<Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} />):
      ("No Tasks to show")}
    </div>
  )
}
export default App;
