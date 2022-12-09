import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mutate from '../mutation';
import Signup from '../Components/signup';
import Login from '../Components/Login';
import Home from '../Components/Home';
import Test1 from '../Components/tests';
import {Login_Test,Signup_Test,Handle }from '../Components/tests';

function AppRouter() {
    return (
        <>
            <Router>


                <Routes>
                    <Route path='/signup' element={<Signup />}></Route>
                </Routes>
                <Routes>
                    <Route path='/handle' element={<Handle />}></Route>
                </Routes>
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
                <Routes>
                    <Route path='/mutate' element={<Mutate />}></Route>
                </Routes>
                <Routes>
                    <Route path='/test' element={<Test1 />}></Route>
                </Routes>
                <Routes>
                    <Route path='/testlogin' element={<Login_Test />}></Route>
                </Routes>
                <Routes>
                    <Route path='/testsignup' element={<Signup_Test />}></Route>
                </Routes>




            </Router>
        </>
    )
}

export default AppRouter;