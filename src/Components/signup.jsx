import React, { useState } from 'react'
import Login from './Login'


export default function Signup() {
    let [fname,setFname]=useState("")
    let  [lname,setLname]=useState("")
    let [uname,setUname]=useState("")
    let[pass,setPass]=useState("")
    let[data,setData]=useState([])

    const Register=(e)=>{
        // 
        e.preventDefault()
        console.log("Submit")
        setData([...data,{fname,lname,uname,pass}])
       
        
    }
   

    return (
    <>
    {data.length ==0 ?
        <div className="container">
        <h1>Signup Form</h1>
        <form onSubmit={(e)=>Register(e)}>
        <label htmlFor='fname'>First Name</label> <br/>
            <input placeholder='First Name' value={fname} onChange={(e)=>setFname(e.target.value)}></input><br/><br/><br/>
            <label htmlFor='lname'>Last Name</label> <br/>
            <input placeholder='Last Name'  value={lname} onChange={(e)=>setLname(e.target.value)}></input><br/><br/><br/>
            <label htmlFor='username'>Username</label> <br/>
            <input placeholder='Username' value={uname} onChange={(e)=>setUname(e.target.value)}></input><br/><br/><br/>
            <label htmlFor='password'>Password</label> <br/>
            <input placeholder='Password' name='password' value={pass}onChange={(e)=>setPass(e.target.value)}></input><br/><br/>
            <input type='submit' />
        </form>
        

    </div>
    
    :<Login data={data}/>
    }

    </>
    )
}