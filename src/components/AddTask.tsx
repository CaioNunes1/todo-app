
import { useState } from 'react'


const AddTask = ({onAdd}) => {

  const[text,setText]= useState('')
  const[day,setDay]=useState('')
  const[reminder,setReminder]=useState(false)

  const onSubmit = (e) =>{//quando o formulário é submetido, ele também chama o onAdd
    e.preventDefault()// Impede o comportamento padrão do formulário (recarregar a página)

    if(!text){// se quando for escrever, sair e não escrever nada, aparece esse alerta
      alert("Please add a task")
      return
    }

    onAdd({text,day,reminder})//quando o formulário é submetido, ele também chama o onAdd, que vai passar os 
    //atributos de text,day e reminder

// Opcionalmente, limpa o formulário
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor="">Task</label>
        <input type="text" placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} />
        
      </div>
      <div className='form-control'>
        <label htmlFor="">Day & Time</label>
        <input type="text" placeholder='Add a Day and Time' value={day} onChange={(e)=>setDay(e.target.value)} />
        
      </div>
<div className='form-control form-control-check'>
        <label htmlFor="">Set Reminder</label>
        <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.target.checked)} />
      </div>

      <input type="submit" value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
