import "./Login.css"
import React, {useState} from 'react'
import getLoggedIn from 'Services/GetLoggedIn'
import NavBar from 'Components/NavBar/NavBar'
import SearchBar from 'Components/SearchBar/SearchBar'

function handleSubmit (e:any, user:string,password:string) {
    e.preventDefault()
    getLoggedIn({user,password})
        .then(token => console.log(token))
    
}

const Login = () => {
    
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <NavBar />
            <SearchBar initialKeyword='' initialLimit={5} initialLang="en" />
            <div className="form-container">
                <form className="login-form" onSubmit={(e)=> handleSubmit(e,user,password)}>
                    <input type="text" placeholder='User' value={user} onChange={(e)=> setUser(e.target.value)}/>
                    <input type="text" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                    <button>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login