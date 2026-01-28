import Header from './components/Header'
import ManyTasks from './components/ManyTasks'

function App(){
  const tasks = [
    {
        "id": 1,
        "text": "Buy groceries",
        "day": "2023-12-12 16:30:00",
        "reminder": true
    },
    {
        "id": 2,
        "text": "Exercise for 30 minutes",
        "day": "2023-12-19 08:15:00",
        "reminder": true
    },
    {
        "id": 3,
        "text": "Read a book",
        "day": "2024-01-01 00:01:00",
        "reminder": false
    },
    {
        "id": 4,
        "text": "Write in a journal",
        "day": "2024-01-16 12:45:00",
        "reminder": false
    }
    
]
return(
    <div className="font-sans min-h-screen">
      <div className="container mx-auto p-8 border-2 border-blue-200 mt-16 max-w-screen-md rounded-lg">
        <Header/>
        <ManyTasks tasks={tasks}/>
      </div>
    </div>
  )
}
export default App