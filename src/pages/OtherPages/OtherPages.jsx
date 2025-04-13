import React from 'react'
import './OtherPages.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const OtherPages = () => {
  return (
    <div className="Other">
        <img src={assets.logo} alt="logo" />
    <h1>404 - Page Not Found</h1>
    <p >
      The page you are looking for does not exist.
    </p>
    <hr />
    <h1>Go To Our Main Page</h1>
    <Link to="/">
      <button>Main Page</button>
    </Link>
  </div>
  )
}

export default OtherPages