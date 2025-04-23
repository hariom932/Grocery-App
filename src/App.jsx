import './App.css'
import React, { useState } from 'react'
import Routing from './components/Routing'
import axios from 'axios'

function App() {
 
    const [data,setData]=useState([]);

    const getData=async()=>
    {
        const row=await axios.get(("https://api.getpostman.com/me"))
        const info=await row.json()
        setData(info)
    }
    useEffect(()=>{
        getData()
        console.log((data));
        
    },[])
    

  return (
    <>
      <Routing/>
    </>
  )
}

export default App
