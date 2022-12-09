import React, { useState } from 'react'
import { useContext,createContext } from 'react'
import { ContextVar } from './context'
import Login from './Login'
import { useNavigate, Link } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate();
    const [fName, setfName] = useState()
    const [lName, setlName] = useState()
    const [uname, setUname] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin] = useState('/signup')
    let context = useContext(ContextVar())
    console.log("SignUp", context)

    const Register = (e) => {
        // 
        e.preventDefault()

        // context.users.push({uname,fName,lName,password})
        setLogin('/login')

        context.users.push("{uname,fName,lName,password}")


        console.log("Signup", context,login)


    }

    return (
        <>
        <Test />
            {/* <context.Provider value={"fgdfgfd"}> */}
            {/* {login == '/signup' ?
                <>
                    <div className="container">
                        <h1>Signup Form</h1>
                        <form onSubmit={(e) => Register(e)}>
                            <label htmlFor='fname'>First Name</label> <br />
                            <input placeholder='First Name' value={fName}></input><br /><br /><br />
                            <label htmlFor='lname' >Last Name</label> <br />
                            <input placeholder='Last Name' value={lName}></input><br /><br /><br />
                            <label htmlFor='username' >Username</label> <br />
                            <input placeholder='Username' value={uname}></input><br /><br /><br />
                            <label htmlFor='password'>Password</label> <br />
                            <input placeholder='Password' value={password}></input><br /><br />
                            <input type='submit' />
                        </form>

                    </div>
                </>
                :
                <>
                    <Link to='/login'>Login</Link>
                </>
            } */}

            {/* </context.Provider> */}
        </>
    )
}

function Test(){
    const [fName, setfName] = useState()
    const [lName, setlName] = useState()
    const [uname, setUname] = useState()
    const [password, setPassword] = useState()
    const[obj,setObj]=useState()
    let context = useContext(ContextVar())
    console.log("SignUp", context)
    const Register = (e) => {
        // 
        e.preventDefault()

        // context.users.push({uname,fName,lName,password})

       setObj({uname,fName,lName,password})
       console.log("Gotto Login",ThemeContext)

        // console.log("Signup", context,login)


    }
    return(
        <ThemeContext.Provider value={'dsfd'}>
        <div className="container">
                        <h1>Signup Form</h1>
                        <form onSubmit={(e) =>{ e.preventDefault();
                            setObj({uname,fName,lName})}
                            }>
                            <label htmlFor='fname'>First Name</label> <br />
                            <input placeholder='First Name' value={fName}></input><br /><br /><br />
                            <label htmlFor='lname' >Last Name</label> <br />
                            <input placeholder='Last Name' value={lName}></input><br /><br /><br />
                            <label htmlFor='username' >Username</label> <br />
                            <input placeholder='Username' value={uname}></input><br /><br /><br />
                            <label htmlFor='password'>Password</label> <br />
                            <input placeholder='Password' value={password}></input><br /><br />
                            <input type='submit' />
                        </form>

                    </div>
      </ThemeContext.Provider>
    )
}