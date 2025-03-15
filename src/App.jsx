import React, { useState, useEffect } from 'react'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Fotter from './components/Fotter/Fotter'
import Loginpop from './components/Loginpopup/Loginpop'

function App() {
  const [showLogin, SetShowLogin] = useState(false)
  const location = useLocation();

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (location.pathname === '/') {
      htmlElement.style.scrollBehavior = 'smooth'; // Smooth scrolling for Home
    } else {
      htmlElement.style.scrollBehavior = 'auto'; // Normal scrolling for other pages
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
          <Route path='*' element={<Navigate to='/' />} /> {/* Redirect unknown routes to Home */}
        </Routes>
      </div>
      <Fotter />
    </div>
  )
}

export default App
