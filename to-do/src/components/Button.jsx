const Button = ({ text, color='btn-blue', onClick }) => {
    return (
        <button 
        type="button" 
        className={`btn ${color}`}
        onClick={onClick}
        >{text}</button>
    )
}

export default Button