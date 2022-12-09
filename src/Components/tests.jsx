import { useState } from "react";
import { createContext, useContext } from 'react';
import { Link } from "react-router-dom";

let con=createContext({
    users:[],
    isLoggedIn:'',
    setUsers:()=>{}
})

function Handle(){
    console.log(con,"context")
    let dum=useContext(con)
    console.log(dum,"dfdfs")
    console.log(dum.users.length,"fdsf")
    return(
        <>
        {
            dum.users.length!=0 ?
            <>
            
            </>
            :
            <>
            <Signup_Test/>
            <Login_Test/>
            </>
        }
        </>
    )

}


export default function Signup_Test(){
    let dum=useContext(con)
    console.log(dum,"from signup")
    // const[users,setUsers]=useState([])
    const [fName, setfName] = useState()
    const [lName, setlName] = useState()
    const [uname, setUname] = useState()
    const [password, setPassword] = useState()
    console.log(con,"con from signup")
    
    let [obj,setObj]=useState("dfdf")
    function AddUsers(){
        dum.users.push({fName,lName,uname,password})
        dum.setUsers(dum.users)
        console.log(dum.users.length,"dffd")

    }
    // setObj('dfgdfg')
    return(
        <>
        {/* <con.Provider value={users}> */}
        <div className="container">
                        <h1>Signup Form</h1>
                        
                            <label htmlFor='fname'>First Name</label> <br />
                            <input placeholder='First Name' value={fName}></input><br /><br /><br />
                            <label htmlFor='lname' >Last Name</label> <br />
                            <input placeholder='Last Name' value={lName} onChange={(e)=>setlName(e.target.value)}></input><br /><br /><br />
                            <label htmlFor='username' >Username</label> <br />
                            <input placeholder='Username' value={uname} onChange={(e)=>setUname(e.target.value)}></input><br /><br /><br />
                            <label htmlFor='password'>Password</label> <br />
                            <input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br /><br />
                            <button onClick={()=>AddUsers()}>Submit</button> 

                    </div>

        {/* </con.Provider> */}
        </>
    )

}

 function Login_Test(users){
    const [fName, setfName] = useState()
    const [lName, setlName] = useState()
    const [uname, setUname] = useState()
    const [password, setPassword] = useState()
    let dum=useContext(con)
    
    let [obj,setObj]=useState("dfdf")
    // setObj('dfgdfg')
    console.log(dum,"Login")
    return(
        <>
        <div className="container">
                        <h1>Login Form</h1>
                        
                            
                            <label htmlFor='username' >Username</label> <br />
                            <input placeholder='Username' value={uname} onChange={(e)=>setUname(e.target.value)}></input><br /><br /><br />
                            <label htmlFor='password'>Password</label> <br />
                            <input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br /><br />
                            <button onClick={()=>setObj({uname,fName})}>Submit</button> 

                    </div>

        </>
    )

}

export {Login_Test,Signup_Test,Handle}