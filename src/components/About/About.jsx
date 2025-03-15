import React from 'react'
import './About.css'

const About = () => {
  return (
            <div className="Fotter-About" id="About">
                <h1 className="headingabout">About Us</h1>
                <p>At EAT IT, we prioritize deliciousness and convenience, ensuring every bite is a memorable experience. Here’s what sets us apart:</p>
                <div className="aboutCard">
                  <div className="A-card">
                    <h1>Wide Variety of Cuisines 🍔</h1>
                    <p>From sizzling South Indian dosas to cheesy American burgers and flavorful biryanis, our menu has something for every craving. Enjoy fresh, high-quality meals from top restaurants near you.</p>
                  </div>
                  <div className="A-card">
                    <h1>Fast & Reliable Delivery 🚀</h1>
                    <p>Hunger can’t wait! Our smart delivery system ensures your food reaches you hot and fresh in no time. Track your order in real-time and enjoy a hassle-free experience.</p>
                  </div>
                  <div className="A-card">
                    <h1>Customer First Approach ❤️</h1>
                    <p>Your satisfaction is our priority! With easy ordering, secure payments, and 24/7 support, we make sure your food cravings are met with deliciousness and convenience.</p>
                  </div>
                </div>
                <h1 className="headingabout1">👉 Order now and experience food like never before! 👈</h1>
            </div>
  )
}

export default About