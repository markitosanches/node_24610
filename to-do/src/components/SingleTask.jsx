const SingleTask = ({task}) => {
    const dateDisplay = (dateString) => {
        const date = new Date(dateString)
        const formattedDate = `${date.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})} at ${date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}`
        return formattedDate
    }
    return(
        <div className="bg-blue-200 p-2 my-4 px-4 cursor-pointer rounded">
            <h3 className="font-bold text-lg">
                {task.text}
            </h3>
            <p>{dateDisplay(task.day)}</p>
        </div>
    )
}
export default SingleTask