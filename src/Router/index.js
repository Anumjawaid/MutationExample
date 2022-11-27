import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Mutate from '../mutation';
import Signup from '../Components/signup';
// import Login from '../Components/login';

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

               

               </Router>
        </>
    )
}

export default AppRouter;