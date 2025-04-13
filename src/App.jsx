import React, { useState, useEffect } from 'react'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Fotter from './components/Fotter/Fotter'
import Loginpop from './components/Loginpopup/Loginpop'
import OtherPages from './pages/OtherPages/OtherPages'

function App() {
  const [showLogin, SetShowLogin] = useState(false)
  const location = useLocation();

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (location.pathname === '/') {
      htmlElement.style.scrollBehavior = 'smooth'; // Smooth scrolling for Home
    } else {
      window.scrollTo(0, 0); // Scroll to top when navigating to other pages
    }
  }, [location.pathname]);

  return (
    <div>
      {showLogin ? <Loginpop SetShowLogin={SetShowLogin} /> : <></>}
      <div className='app'>
        <Navbar SetShowLogin={SetShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='*' element={<OtherPages/>} /> 
        </Routes>
        </div>
        <div className="foot">
        <Fotter />
      </div>
    </div>
  )
}

export default App
