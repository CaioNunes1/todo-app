import Task from "./Task"
const Tasks = ({tasks,onDelete,onToggled}) => {
  
  return (
    <div>
      {tasks.map((task)=>(
        <Task key={task.id} task={task} 
        onDelete={onDelete}
        onToggled={onToggled}
        /> 
        //esse key é para meio que ajudar a identificar, pq sen não o react fica 
        //dando aparecendo uns erros
      ))}
    </div>
  )
}

export default Tasks
