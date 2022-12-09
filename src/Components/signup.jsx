import React, { useState } from 'react'
import Login from './Login'
import Lottie from "lottie-react";
import loginanimation from "../Images/107385-login.json";
import { Button } from "antd";



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
             <div className="flex-container">
             <div className="left_side">
             <Lottie
                animationData={loginanimation}
                loop={true}
                className="img_carousel"
              />
             </div>
             <div className="right_side"> 
        <form onSubmit={(e)=>Register(e)}>
        <label htmlFor='fname'>First Name</label> <br/>
            <input className='fields' value={fname} onChange={(e)=>setFname(e.target.value)}></input><br/><br/><br/>
            <label htmlFor='lname'>Last Name</label> <br/>
            <input  className='fields' value={lname} onChange={(e)=>setLname(e.target.value)}></input><br/><br/><br/>
            <label htmlFor='username'>Username</label> <br/>
            <input  className='fields' value={uname} onChange={(e)=>setUname(e.target.value)}></input><br/><br/><br/>
            <label htmlFor='password'>Password</label> <br/>
            <input  className='fields' name='password' value={pass} onChange={(e)=>setPass(e.target.value)}></input><br/><br/>
            {/* <input type='submit' /> */}
            <div className="btn">
            <Button type='submit' className="signupBtn">
              Sign Up
            </Button>
            </div>
        </form>

        </div> 
        </div>
    
    :<Login data={data}/>
    }

    </>
    )
}