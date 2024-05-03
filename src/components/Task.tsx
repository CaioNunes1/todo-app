import { FaTimes } from "react-icons/fa"

interface TaskInterface{
  id:number
  text:string;
  day:string;
  reminder:boolean;
}

interface propsTask{
  task:TaskInterface
  onDelete: (id: number) => void;
  onToggled: (id: number) => void;
}
const Task: React.FC<propsTask>= ({task,onDelete, onToggled}) => {
    //em click, ele retorna no App e chamar deleteTask

    //no classname chama o css de task e ${task.reminder ? 'reminder':'' } fala o seguinte, 
    //se o reminder for true, chama o css do reminder, se não for não chama mais nada na classname só o task
  return (
    <div className={`task ${task.reminder ? 'reminder':'' }`} onDoubleClick={()=>onToggled(task.id)}>
      <h3>{task.text} 
      <FaTimes style={{color:'red', cursor:'pointer'}} 
      onClick={()=>onDelete(task.id)}/> </h3>
      <p>{task.day}</p>
      
    </div>
  )
}

export default Task
