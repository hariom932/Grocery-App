import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import DetailPage from './DetailPage'

const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/detail' element={<DetailPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing