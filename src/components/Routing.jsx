import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import DetailPage from './DetailPage'
import Dashboard from './Dashboard'
import About from '../mainPages/About'
import Faqs from '../mainPages/Faqs'
import Contact from '../mainPages/Contact'
import Shop from '../mainPages/Shop'
import BlogList from '../blog/BlogList'
import BlogDetails from '../blog/BlogDetails'

const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/detail' element={<DetailPage/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/faqs' element={<Faqs/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/bloglist' element={<BlogList/>}></Route>
                <Route path='/blogdetails' element={<BlogDetails/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing