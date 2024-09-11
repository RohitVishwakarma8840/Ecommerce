import 'remixicon/fonts/remixicon.css'
import { BrowserRouter,Routes , Route } from 'react-router-dom'

import { useState } from 'react'
import './App.css'
import Layout from './components/Admin/Layout'
import Product from './components/Admin/Product'
import Orders from './components/Admin/Orders'
import NotFound from './components/NotFound'

function App() {

  return (
   <BrowserRouter>
   <Routes>
   <Route path="/admin">
  <Route path="product" element={<Product/>}/>
   <Route path="orders" element={<Orders/>}/>
   </Route>
 <Route path="*" element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
