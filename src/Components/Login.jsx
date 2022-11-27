import React, { useState } from 'react'


export default function Login() {

    const Register=(e)=>{
        // 
        e.preventDefault()
        console.log("Submit")
    }

    return (
    <>
    <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={(e)=>Register(e)}>
            <label htmlFor='username'>Username</label> <br/>
            <input placeholder='Username'></input><br/><br/><br/>
            <label htmlFor='password'>Password</label> <br/>
            <input placeholder='Password'></input><br/><br/>
            <input type='submit' />
        </form>

    </div>
    </>
    )
}