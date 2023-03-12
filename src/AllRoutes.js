import React from 'react'
import {  Routes, Route } from 'react-router-dom'

import Home from "./Pages/Home"
import About from "./Pages/About"
import Work from "./Pages/Work"
import Contact from "./Pages/Contact"


const AllRoutes = () => {
  return (
    <div>
      
      
        <Routes>
        
            <Route exact path='/' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Work' element={<Work />}/>
            <Route path='/Contact' element={<Contact />}/>
        </Routes>
      
    </div>
  )
}

export default AllRoutes