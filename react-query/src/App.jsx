import { useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

import './App.css'
import Products from './Pages/Products'
import Product from './components/Product'
import Home from './Pages/Home'

function App() {
  const navigate = useNavigate()

  return (
    <>
      
        
        <Routes>
          <Route path='/'>
            <Route path="" element={<Home/>}/>
            <Route path='/products' element={<Products />} />
            <Route path='products/:productId' element={<Product/>}/>
          </Route>
        </Routes>

    
    </>
  )
}

export default App
