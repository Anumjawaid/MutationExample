import React, { useState } from 'react'


export default function Signup() {

    const Register=(e)=>{
        // 
        e.preventDefault()
        console.log("Submit")
    }

    return (
    <>
    <div className="container">
        <h1>Signup Form</h1>
        <form onSubmit={(e)=>Register(e)}>
        <label htmlFor='fname'>First Name</label> <br/>
            <input placeholder='First Name'></input><br/><br/><br/>
            <label htmlFor='lname'>Last Name</label> <br/>
            <input placeholder='Last Name'></input><br/><br/><br/>
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