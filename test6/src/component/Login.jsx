import React from 'react'
import { useState,useEffect } from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 const Login = () => {
const navigate= useNavigate()
     


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleLogin = () =>{
        const data = localStorage.getItem("keyData")
        console.log(data)
        // if(data && data.length){
            // const result = JSON.parse(data)
            // console.log(result)
            // const savedData = 
            // result.filter((elem, index)=>{
            //     return elem.email===email && elem.password===password    
            // })
            if(data.email===!email && data.password===!password){
                console.log("please filll correct detail")
            }else{
                navigate("/home")
            }
            // if(savedData){
                // navigate("/home")
            // }
        // }
    }
  return (
    <div>Login
         <input type="text" placeholder='Enter Your email'value={email} onChange={(e) =>{
                setEmail(e.target.value)
        }} />
          <input type="text" placeholder='Enter Your password'value={password} onChange={(e) =>{
            setPassword(e.target.value)
        }}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default Login