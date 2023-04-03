import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 const Login = () => {
const navigate= useNavigate()

  useEffect(() => {
    const data= localStorage.getItem("token")
    console.log(data)
    if(data){
        // navigate("/home")
    }
  })
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleLogin = () =>{
        axios.post("https://reqres.in/api/register",{
            email:email,
            password:password,
        })
        .then((res) =>{
            console.log(res.data)
            // localStorage.setItem("token",JSON.stringify(res.data))
            if(res.data.email===email && res.data.password===password){
                navigate("/home")
            }else{
                console.log("err in login api")
            }
        })
        .catch((err) =>{
            console.log("login",err)
        })
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