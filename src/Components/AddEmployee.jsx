import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function AddEmployee() {
    let empl = useSelector((state) => state.employees)
    let dispatch = useDispatch()
    console.log(empl, "redux state")

    let [ename, setName] = useState("")
    let [eemail, setEmail] = useState("")
    let [show,setShow]=useState('none')


    const Add = (e) => {
        // 
        e.preventDefault()
        dispatch({ type: 'ADD_EMPLOYEE', payload: { ename, eemail } })
        
        setEmail('')
        setName('')
        setShow('none')


    }


    return (
        <>
            {empl.length ?
                <div className="container">
                
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                         {empl.map((v,i)=>(
                            <tr key={i}>
                                <td>{v.ename}</td>
                                <td>{v.eemail}</td>
                                </tr>
                            
                         ))}
                         
                    </tbody>
                    
                </table>
                      <button style={{margin:'20px'}} onClick={()=>setShow('block')}>Add Employee</button>
                      <form onSubmit={(e) => Add(e)} style={{display:show}}>
                        <label htmlFor='fname'>Employee Name</label> <br />
                        <input placeholder='First Name' value={ename} onChange={(e) => setName(e.target.value)}></input><br /><br /><br />
                        <label htmlFor='lname'>Employee Email</label> <br />
                        <input placeholder='Last Name' value={eemail} onChange={(e) => setEmail(e.target.value)}></input><br /><br /><br />

                        <input type='submit' />
                    </form>
                </div>
                :
                <div className="container">
                    <h6>No Employees Yet !! Fill Form To Create One</h6>
                    <h1>Add Employee Form</h1>
                    <form onSubmit={(e) => Add(e)}>
                        <label htmlFor='fname'>Employee Name</label> <br />
                        <input placeholder='First Name' value={ename} onChange={(e) => setName(e.target.value)}></input><br /><br /><br />
                        <label htmlFor='lname'>Employee Email</label> <br />
                        <input placeholder='Last Name' value={eemail} onChange={(e) => setEmail(e.target.value)}></input><br /><br /><br />

                        <input type='submit' />
                    </form>

                </div>
            }



        </>
    )
}