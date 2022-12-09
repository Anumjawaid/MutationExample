import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <>
        <header style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
            <Link to='/signup' style={{marginRight:'20px'}}>Signup</Link>
            <Link to='/login' style={{marginRight:'20px'}}>Login</Link>
            <Link to='/'>Home</Link>
        </header>
        </>
    )
}