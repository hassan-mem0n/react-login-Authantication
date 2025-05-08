import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
    const logedUser = JSON.parse(localStorage.getItem("user"))
    let logoutHandler = (e)=>{
        e.preventDefault()
navigate("/Login")
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
    <div className="bg-white p-6 rounded shadow-md w-900 max-w-md">
      <h2 className="text-2xl font-bold mb-2">Welcome : {logedUser.name}</h2>
      <h2 className="text-1xl font-bold mb-2">Email : {logedUser.email}</h2>
      <h2 className="text-1xl font-bold mb-2">password : {logedUser.password}</h2>
      <p className="text-gray-600">You're now on your profile page.</p>
      <button className='border rounded-2xl w-29 text-white bg-orange-700' onClick ={logoutHandler}>Logout</button>
    </div>
  </div>
  )
}

export default Home
