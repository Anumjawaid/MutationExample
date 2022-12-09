import React, { useState } from 'react'
import Home from './Home'


export default function Login(props) {
    console.log(props, "dfdf")

    let [uname, setUname] = useState("")
    let [pass, setPass] = useState("")
    let [home, setHome] = useState('')

    const Register = (e) => {
        // 
        e.preventDefault()
        console.log("Submit")
        if (props.data[0].uname == uname && props.data[0].password == pass) {
            setHome(home)
        }
        else {
            console.log("Incorrect")
        }
    }

    return (
        <>
            {
                home == '' ?
                    <div className="container">
                        <h1>Login Form</h1>
                        <form onSubmit={(e) => Register(e)}>
                            <label htmlFor='username'>Username</label> <br />
                            <input placeholder='Username' value={uname} onChange={(e) => setUname(e.target.value)}></input><br /><br /><br />
                            <label htmlFor='password'>Password</label> <br />
                            <input placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)}></input><br /><br />
                            <input type='submit' />
                        </form>

                    </div>
                    :
                    <Home data={props} />
            }

        </>
    )
}