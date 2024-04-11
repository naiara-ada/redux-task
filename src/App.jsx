import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "./redux/todosSlice.js";
import {useState} from 'react'
import './App.css'


const App = () => {
  const tasks = useSelector((state)=> state.todos.tasks)
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = ()=>{
    dispatch(addTask({
      id: newTask + tasks.length + 1,
      title: newTask
    }));
    setNewTask('');
  }

  const handleDeleteTask = (taskId)=>{
      dispatch(deleteTask(taskId))
  }



  return (
    <div className="tasksClass">
      <h1>Lista de tareas</h1>
      <div className="addTaskClass">
        <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
        <button onClick={handleAddTask}>Añadir tarea</button>
        </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={()=>handleDeleteTask(task.id)}>Eliminar tarea</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
