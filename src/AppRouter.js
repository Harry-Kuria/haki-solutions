import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Footer from './Components/Home/Footer/Footer'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
const AppRouter = () => {
  return (
    <BrowserRouter>
  <Routes>
      <Route exact path='/' element={<Home></Home>}></Route>
    
      <Route exact path='/services' element={<Services></Services>}></Route>
      <Route exact path='#contacts' element={<Footer id='contacts' link='#contacts'></Footer>}></Route>
        

        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
