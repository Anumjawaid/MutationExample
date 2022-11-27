import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <>
        <header>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
            <Link to='/'>Home</Link>
        </header>
        </>
    )
}