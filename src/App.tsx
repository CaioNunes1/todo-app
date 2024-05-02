import Header from './components/Header'
import './App.css'
import './index.css'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'

function App() {
  const [tasks,setTask]=useState([
    {
      id:1,
      text:"Horário Doutor",
      day:"29 abril ás 14:00",
      reminder:true,
    },
    {
      id:2,
      text:"Entrevista emprego",
      day:"29 abril ás 10:00",
      reminder:true,
    },
    {
      id:3,
      text:"Treino",
      day:"29 abril ás 18:30",
      reminder:true,
    }
  ])

  //Delete Tasks function
  const deleteTask=(id)=>{
    setTask(tasks.filter((task)=>task.id !== id))
    //no tasks.filter= para cada task em tasks, retornar apenas a task que tem o id diferente do passado como parâmetro

  }
  //Toggle reminder
  const toggleReminder=(id)=>{
    setTask(tasks.map((task)=> task.id==id ? {...task,reminder: !task.reminder } : task))
  }//aqui nesse setTask, ele vai procurar o id que das tasks que foi clicado, e quando encontrar vai copiar todas as tasks novamente
  //porém vai mudar o reminder da task que foi clicada, e se não achar a task retorna ela normalmente

  return (
    <>
        <div className='container'>
          <Header />
          <AddTask/>
          {tasks.length >0 ? (<Tasks tasks={tasks} 
          onDelete={deleteTask} onToggled={toggleReminder}/>)  : ('No task to show')}
          
        </div>
    </>
  )
}

export default App
