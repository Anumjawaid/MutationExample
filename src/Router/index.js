import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mutate from '../mutation';
import Signup from '../Components/signup';
// import Login from '../Components/login';
import SignupRedux from '../Components/SignupRedux';
import LoginRedux from '../Components/LoginRedux';
import AddEmployee from '../Components/AddEmployee';

function AppRouter() {
    return (
        <>
        <Router>
               <Routes>
               <Route path='/' element={<Signup />}></Route>
               </Routes>
               {/* <Routes>
               <Route path='/login' element={<Login />}></Route>
               </Routes> */}
               <Routes>
               <Route path='/mutate' element={<Mutate />}></Route>
               </Routes>
               <Routes>
               <Route path='/signupX' element={<SignupRedux />}></Route>
               </Routes>
               <Routes>
               <Route path='/loginX' element={<LoginRedux />}></Route>
               </Routes>
               <Routes>
               <Route path='/addEmployee' element={<AddEmployee />}></Route>
               </Routes>


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