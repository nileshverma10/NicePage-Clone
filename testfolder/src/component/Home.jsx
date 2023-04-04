import React from 'react'

const Home = () => {
  const token = localStorage.getItem("token")
  return (
    <>
    {token ?  <h1>ram siya ram </h1> : "plz login first"}
        
    </>
  )
}

export default Home
