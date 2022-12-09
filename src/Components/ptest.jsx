import React,{useState,useEffect} from 'react'

function Main(){
    let [uname,setUname]=useState()
    let [pass,setPass]=useState()

    const Listner=(data)=>{
        setUname(data.uname)
        setPass(data.pass)
    }
    function showdata(){
       if(uname&&pass){
        return (
        <>
        <h1>User Logged In</h1>
        </>
        )
       }
       else{
        {
            return (
            <>
            <h1>User not Logged In</h1>
            </>
            )
           }
       }
    }



    return(
        <>
        {/* callback child */}
        <Child callback={(data)=>Listner(data)}/>
        {showdata()}
        </>
    )
}

function Child({callback}){
    const[username,setUsername]=useState()
    const[password,setPass]=useState()

    function clickhandle(){
        callback({username,password})
    }

    return(
        <>
        
        </>
    )


}