import React from 'react'
import { HashRouter, BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Footer from './Components/Home/Footer/Footer'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
const AppRouter = () => {
  return (
    <HashRouter>
  <Routes>
      <Route exact path='/' element={<Home></Home>}></Route>
    
      <Route exact path='/services' element={<Services></Services>}></Route>
      <Route exact path='#contacts' element={<Footer id='contacts'></Footer>}></Route>
        

        </Routes>
    </HashRouter>
  )
}

export default AppRouter
