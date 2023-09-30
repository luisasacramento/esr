import React, {useState, useEffect} from "react";

function App(){
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [editingIndex, setEditingIndex] = useState(null) 

  function addOrUpdateTask(){
    if(newTask.trim() === "") return
    if(editingIndex !== null){
      const updatedTasks = [...tasks]
      updatedTasks[editingIndex].text = newTask
      setTasks(updatedTasks)
      setEditingIndex(null)
    } else {
      setTasks([...tasks, {text: newTask, complete: false}])
    }
    setNewTask(""); 
  }
  function toggleTask(index){
    const updatedTasks = [...tasks]
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTasks(updatedTasks)
  }
  function removeTask(index){
    const updatedTasks = tasks.filter((task, i) => i !== index)
    setTasks(updatedTasks)
  }
  function startEditing(index){
    setNewTask(tasks[index].text)
    setEditingIndex(index)
  }
  useEffect(() =>{
    const savedTasks = localStorage.getItem("tasks")
    if(savedTasks){
      setTasks(JSON.parse(savedTasks))
    }

  }, [])
  useEffect (()=>{
    localStorage.setItem('tasks', JSON.stringify (tasks));
}, [tasks])




return (
  <div>
    <h1>Gerenciar de Tarefas</h1>
    <input 
    value={newTask}
    onChange={(e)=>{setNewTask(e.target.value)}}
    placeholder='Nova tarefa'
    />
    <button onClick={()=>addOrUpdateTask()}>
      {editingIndex ? "Atualizar" : "Adicionar"}
      </button>
      <ul>
        {tasks.map((task, index) =>(
          <li key = {index}>
            <span 
            style={{ textdecoration: task.completed ? 'line-through' : 'none'}}
            onClick={() => toggleTask(index)}>
              {task.text}
            </span>
            <button onClick={() => startEditing(index)}>Editar</button>
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
  </div>
)
}

export default App;