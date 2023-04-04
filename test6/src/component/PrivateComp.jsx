import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const PrivateComp = () => {
    const data = localStorage.getItem("token")
  return (
  (data? <Outlet/>:<Navigate to ="/signup"/>)
  )
}

export default PrivateComp
