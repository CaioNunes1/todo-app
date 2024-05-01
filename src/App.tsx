import Header from './components/Header'
import './App.css'
import './index.css'
import Tasks from './components/Tasks'
import { useState } from "react"

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

  return (
    <>
        <div className='container'>
          <Header />
          <Tasks tasks={tasks}/>
        </div>
    </>
  )
}

export default App
