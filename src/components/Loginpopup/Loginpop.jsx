import React, { useState } from 'react';
import './Loginpop.css';
import { assets } from '../../assets/assets';

const Loginpop = ({ SetShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  const onSubmit = (event) => {
    event.preventDefault();
    alert(`${currentState} form submitted!`);
  };

  return (
    <div className="Login-popup">
      <form onSubmit={onSubmit} className="Login-popup-form">
        <div className="login-popup-title">
          <h1>{currentState}</h1>
          <img onClick={() => SetShowLogin(false)} src={assets.cross_icon} alt="Back" />
        </div>
        <div className="Login-inputs">
          {currentState === "Sign Up" && (
            <input name="UserName" type="text" placeholder="Your Name" required />
          )}
          <input name="email" type="email" placeholder="Your Email" required />
          <input name="password" type="password" placeholder="Your Password" required />
        </div>
        <button type="submit">{currentState}</button>
        {currentState === "Sign Up" && (
          <div className="Login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the Terms and Conditions of Privacy Policy.</p>
          </div>
        )}
        <p>
          {currentState === "Login"
            ? "Create New Account? "
            : "Already have an account? "}
          <span onClick={() => setCurrentState(currentState === "Login" ? "Sign Up" : "Login")}>Click Here</span>
        </p>
      </form>
    </div>
  );
};

export default Loginpop;
