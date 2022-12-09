import React, { useState } from 'react'
import Home from './Home'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


export default function LoginRedux() {
    let users=useSelector((state)=>state.users)
      let dispatch=useDispatch()
      console.log(users,"redux state")
    
    let [uname,setUname]=useState("")
    let[pass,setPass]=useState("")
    let[home,setHome]=useState('')

    const Register=(e)=>{
        // 
        e.preventDefault()
        console.log("Login")
        if(users[0].uname == uname && users[0].pass == pass){
            // 
            dispatch({type:'LOGIN',payload:true})
            console.log("")

        }
        else{
            console.log("Incorrect")
        }
    }

    return (
    <>
 
        <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={(e)=>Register(e)}>
            <label htmlFor='username'>Username</label> <br/>
            <input placeholder='Username' value={uname} onChange={(e)=>setUname(e.target.value)}></input><br/><br/><br/>
            <label htmlFor='password'>Password</label> <br/>
            <input placeholder='Password' value={pass}onChange={(e)=>setPass(e.target.value)}></input><br/><br/>
            <input type='submit' />
        </form>

    </div>
    
    
    </>
    )
}