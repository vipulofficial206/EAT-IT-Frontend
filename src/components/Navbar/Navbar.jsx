import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Storecontext } from '../../context/Storecontext';

const Navbar = ({SetShowLogin}) => {
const [menu,setmenu] = useState("home");
const {getTotalAmount} = useContext(Storecontext);
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div className="mainNavabar">
    <div className='Navbar'>
        <img className="logo" src={assets.logo} alt="logo" />
        <ul className='Navbar-mid'>
        <Link to="/" onClick={() => { setmenu("home"); scrollToSection("Header23"); }} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href="#explore-menu" onClick={() => setmenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
          <a  href="#About" onClick={() => setmenu("about")} className={menu==="about"?"active":""}>About</a>
          <a  href="#Fotter" onClick={() => setmenu("contact")} className={menu==="contact"?"active":""}>Contact</a>
        </ul>
        <div className="Navbar-right">
          <img src={assets.search_icon} alt="Search"/>
          <div className="Navbar-search-icon">
         <Link to="/cart"><img src={assets.basket_icon} alt="Basket"/></Link> 
          <div className={getTotalAmount()>0?"dot":""}></div>
          </div>
          <button onClick={()=>SetShowLogin(true)} className='Navbar-button'>Sign in</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar