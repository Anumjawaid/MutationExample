import React from 'react'
import Nav from './nav'
import { useContext } from 'react'
import { ContextVar } from './context'

export default function Home() {
    
    let context=useContext(ContextVar())
    console.log("Home",context)
    let isLoggedIn = context.isLoggedIn,uname=context.uname

    return (
        <>
            <Nav />
            <h2>Home</h2>
            {
                isLoggedIn ?
                    <>
                    You Are Logged In {uname}
                    </>
                    : <>
                    You Are not Logged In {uname}
                    </>
            }
        </>
    )
}