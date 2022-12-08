import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Mutate from '../mutation';
import Signup from '../Components/signup';
// import Login from '../Components/login';
import SignupRedux from '../Components/SignupRedux';
import LoginRedux from '../Components/LoginRedux';

function AppRouter (){
    return(
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

               

               </Router>
        </>
    )
}

export default AppRouter;