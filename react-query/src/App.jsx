import { useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Products from './Pages/Products'
import Product from './components/Product'
import Home from './Pages/Home'
import Paginated from './Pages/Paginated'

function App() {
  const navigate = useNavigate()

  return (
    <>


      <Routes>
        <Route path='/'>
          <Route path="" element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='products/:productId' element={<Product />} />
          <Route path='paginated' element={<Paginated />} />
        </Route>
      </Routes>


    </>
  )
}

export default App
