import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextVar } from './context'
import Home from './Home'
import { useNavigate ,Link } from 'react-router-dom';



export default function Login() {
    const navigate = useNavigate();
    const [uname, setUname] = useState()
    const [password, setPassword] = useState()
    let context = useContext(ContextVar())
    console.log("Contxt Login", context)

    const Register = (e) => {
        // 
        e.preventDefault()
        if (context.users.uname == uname && context.users.uname == uname) {
            console.log('User Logged In')
            context.isLoggedIn = true
            context.uname = uname
            console.log("Submit")
            // navigate('/')
            return <Link to='/'>Home</Link>
        }
        else{
            console.log("Invalid Password name")
        }

    }

    return (
        <>
         {/* <context.Provider value={"fgdfgfd"}> */}
            <div className="container">
                <h1>Login Form</h1>
                <form onSubmit={(e) => Register(e)}>
                    <label htmlFor='username' >Username</label> <br />
                    <input placeholder='Username' value={uname}></input><br /><br /><br />
                    <label htmlFor='password'>Password</label> <br />
                    <input placeholder='Password' value={password}></input><br /><br />
                    <input type='submit' />
                </form>

            </div>
            {/* </context.Provider> */}
        </>
    )
}