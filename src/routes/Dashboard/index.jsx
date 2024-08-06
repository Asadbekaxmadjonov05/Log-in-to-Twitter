import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Profile } from '../../pages/Dashboard'

function index() {
  return ( 
    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='profile' element={<Profile/> }/>
    </Routes>
  )
}

export default index
