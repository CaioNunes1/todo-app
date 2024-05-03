import Task from "./Task"

interface TaskfromTasks {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

interface TasksProps {
  tasks: TaskfromTasks[];
  onDelete: (id: number) => void;
  onToggled: (id: number) => void;
}

const Tasks: React.FC<TasksProps> = ({ tasks, onDelete, onToggled }) => {
  
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
