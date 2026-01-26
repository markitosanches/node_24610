
const Footer = ({year, owner="Maisonneuve"}) => {
    return(
        <footer className = "text-center py-3">
            Copyright {year} - {owner}
        </footer>
    )
}

const Button = ({text, color="blue", onClick}) => {
    //  const message = () => {
    //     console.log('Message')
    //  }
    return(
        <button 
        className={`text-white px-4 py-2 rounded-lg bg-${color}-500 hover:bg-${color}-800`}
        type="button"
        // onClick={message}
        onClick = {onClick}
        >{text}</button>
    )
}


const Input = (props) => {
    return(
        <div className="my-3">
            <label>
                {props.text}
                <input type={props.type} placeholder={`Insert your ${props.text} `} className="border rounded px-3 py-2 my-2 w-full" />
            </label>
        </div>
    )
}

const ReactAppFromCDN = () => {
    const onClickPrimary = () => {
        console.log('Primary btn')
    }
    const onClickSecondary = () => {
        alert('Secondary Btn')
    }
    return(
        //jsx
        <div className="container mx-auto">
            <div className="px-4 py-5 m-5 text-center">
                <h1 className="text-5xl font-bold">React CDN with Tailwind</h1>
                <div className="mx-auto mt-4">
                    <p className="text-xl mb-4">React Component</p>
                    <div className="flex gap-3 justify-center">
                        <Button text="Primary" onClick={onClickPrimary}/>
                        <Button text="Secondary" color="pink" onClick={onClickSecondary}/>
                        
                    </div>
                </div>
                <Input text="Name"/>
                <Input text="Email" type="email"/>
                <Input text="Password" type="password"/>
                <Footer year="2026" />
            </div>
        </div>
    )
}

ReactDOM.render(<ReactAppFromCDN/>, document.querySelector('#root'))
