import { FaTimes, FaEye } from 'react-icons/fa'
import {Link } from 'react-router-dom'
// const onDelete = (id) => {
//     alert(id);
// }
const SingleTask = ({task, onDelete, onToggle}) => {
    const dateDisplay = (dateString) => {
        const date = new Date(dateString)
        const formattedDate = `${date.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})} at ${date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}`
        return formattedDate
    }
    return(
        <div className={`bg-blue-200 p-2 my-4 px-4 cursor-pointer rounded ${task.reminder ? 'border-l-8 border-blue-800' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3 className="font-bold text-lg flex items-center justify-between">
                {task.text}
                <div className="flex">
                    <Link to={`/task/${task.id}`} className="mr-3 text-blue-900"><FaEye/></Link>
                    <FaTimes className="text-red-600 pointer" onClick={() => onDelete(task.id)}/>
                </div>
                
            </h3>
            <p>{dateDisplay(task.day)}</p>
        </div>
    )
}
export default SingleTask
