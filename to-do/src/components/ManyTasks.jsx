
import SingleTask from "./SingleTask"
const ManyTasks = ({tasks, onDelete, onToggle}) => {
    return(
        <>
            {tasks.map((task)=>(<SingleTask task={task} key={task.id}  onDelete={onDelete} onToggle={onToggle}/>))}       
        </>
    )
}
export default ManyTasks