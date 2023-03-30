import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'
export const SignUp = () => {
    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignUp =() =>{
        axios.post("https://reqres.in/api/register",
       { email:email,
        password:password}
        )
        .then((res) =>{
            console.log(res.data)
            if(res.data){
                localStorage.setItem("token",JSON.stringify(res.data))
                navigate("/home")
            }else{
                console.log("error in your register api")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <h1>SignUp Form</h1>
        <input type="text" placeholder='Enter Your Name'value={name} onChange={(e) =>{
                setName(e.target.value)
        }} />
        <input type="text" placeholder='Enter Your surname' value={surname} onChange={(e) =>{
            setSurname(e.target.value)
        }}/>
        <input type="text" placeholder='Enter Your email'value={email} onChange={(e) =>{
                setEmail(e.target.value)
        }} />
        <input type="text" placeholder='Enter Your password'value={password} onChange={(e) =>{
            setPassword(e.target.value)
        }}/>
        <button onClick={handleSignUp}>SignUP</button>
    </div>
  )
}
