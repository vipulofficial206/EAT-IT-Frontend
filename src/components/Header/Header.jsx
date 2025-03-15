import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div >
    <div className="header" id="Header23">
      {/* Text Content Section */}
      <div className="header-content">
        <h2>Craving? Just EAT IT!</h2>
        <p>
          Craving something delicious? With EAT IT, your favorite meals are just a tap away! 
          Whether you're in the mood for a quick snack, a hearty meal, or a sweet treat, 
          we bring the best restaurants right to your doorstep.
        </p>
      </div>

      {/* Image Card Section */}
      <div className="card">
        <a href="#explore-menu"><button>MENU</button></a>
      </div>
    </div>
    <hr />
    </div>
  );
};

export default Header;
