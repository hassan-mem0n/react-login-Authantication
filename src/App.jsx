import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './component/Login'
import Register from './component/Register'

const App = () => {
  return (
    <div>
<Routes>
  <Route path='/login' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/' element={<Home/>} />
  
  </Routes>      
    </div>
  )
}

export default App
