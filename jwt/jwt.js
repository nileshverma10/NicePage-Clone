const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port =  8000;


app.post("/login",(req,res) =>{
    const user = {
        id:1,
        name:"nihal",
        email:"nihal@gmail.com",
        password:"nihal"
    }

    jwt.sign({user},"nihal",{expiresIn:"300s"},(err,token)=>{
        res.send({
            token
        })
    })
})
app.post("/userProfile",verifyToken,(req,res) =>{
       jwt.verify(req.token,"nihal",(err,userData) =>{
        if(err){
            res.send({
                message:"check post api"
            })
       }else{
        res.json({
            message:"data collect",
            userData
        })
       }
       })
})
    function verifyToken(req,res,next){
        const bearer = req.headers['authorization']
        if(typeof bearer !== undefined){
            const data = bearer.split(" ")
            const token = data[1]
            req.token = token
            next()
        }else{
            res.json({
                message:"bearer undefined"
            })
        }
    }
app.listen(port, () =>{
    console.log(`your app is running${port}`);
})