import { Link } from 'react-router-dom'
import { useEffect } from 'react' 
const About = ({setShowAddTask}) => {
    useEffect(()=>{
        setShowAddTask(false)
    }, [setShowAddTask])
    return(
        <>
            <h4 className="font-bold text-lg">
                About App
            </h4>
            <p>Version 1.0</p>
            <Link to="/" className="text-blue-700 hover:underline">Go Back</Link>
        </>
    )
}
export default About