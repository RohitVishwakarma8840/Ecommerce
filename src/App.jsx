import 'remixicon/fonts/remixicon.css'
import { BrowserRouter,Routes , Route } from 'react-router-dom'

import { useState } from 'react'
import './App.css'
import Admin from './components/Admin'

function App() {

  return (
   <BrowserRouter>
   <Routes>

  {/* <Route path="/" element={<h1> Welcome to rohti </h1>}/> */}
  <Route path="/admin" element={<Admin/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App
