import Header from './components/Header'
import './App.css'
import './index.css'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'

function App() {

  interface Task {
    id:number
    text: string;
    day: string;
    reminder: boolean;
  }

  const[showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTask]=useState<Task[]>([
    // {
    //   id:1,
    //   text:"Horário Doutor",
    //   day:"29 abril ás 14:00",
    //   reminder:true,
    // },
    // {
    //   id:2,
    //   text:"Entrevista emprego",
    //   day:"29 abril ás 10:00",
    //   reminder:true,
    // },
    // {
    //   id:3,
    //   text:"Treino",
    //   day:"29 abril ás 18:30",
    //   reminder:true,
    // }
  ])

  //Delete Tasks function
  const deleteTask=(id:number)=>{
    setTask(tasks.filter((task)=>task.id !== id))
    //no tasks.filter= para cada task em tasks, retornar apenas a task que tem o id diferente do passado como parâmetro

  }
  //Toggle reminder
  const toggleReminder=(id:number)=>{
    {setTask(tasks.map((task)=> task.id==id ? {...task,reminder: !task.reminder } : task))}
  }//aqui nesse setTask, ele vai procurar o id que das tasks que foi clicado, e quando encontrar vai copiar todas as tasks novamente
  //porém vai mudar o reminder da task que foi clicada, e se não achar a task retorna ela normalmente

  const addTask = (newTask: Task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const taskWithId = { id, ...newTask };
    setTask([...tasks, taskWithId]);
  };

  return (
    <>
        <div className='container'>
          <Header title="Task Tracker" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />{/*quando o botão do header,(Add) for clicaado ele mudar de true pra false, ou false pra true*/} 
          {/*se o showAddTask for true vai mostrar o addTask */}
          {showAddTask && <AddTask onAdd={addTask}/>}
          {/*" por sua vez, chama onAdd, que é na verdade addTask passada do App, e envia um objeto com os estados atuais (text, day, reminder)."*/}
          {tasks.length >0 ? (<Tasks tasks={tasks} 
          onDelete={deleteTask} onToggled={toggleReminder}/>)  : ('No task to show')}
          
        </div>
    </>
  )
}

export default App
