import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import  {SignUp}  from './SignUp'
import  {Login}  from './Login'
import Home from './Home'
import Private from './Private'
import  {Logout}  from './Logout'



 const Router1 = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route element={<Private/>}>
        <Route exact path ="/home" element={<Home/>}/>
        <Route exact path ="/logout" element={<Logout/>}/>
        </Route>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/login" element={<Login/>}></Route>
       
      </Routes> 
    </div>
  )
}
export default Router1