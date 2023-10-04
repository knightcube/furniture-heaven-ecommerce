import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import ShoppingCart from './pages/ShoppingCart'
import ProductDetails from './pages/ProductDetails'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import LandingPage from './pages/LandingPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/registration' element={<RegistrationPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/products' element={<AllProducts/>}></Route>
        <Route path='/details' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<ShoppingCart/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App