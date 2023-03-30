import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const Private = () => {
    const data = localStorage.getItem("token")
  return (
  (data? <Outlet/>:<Navigate to ="/signup"/>)
  )
}

export default Private
