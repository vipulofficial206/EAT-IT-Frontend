import React from 'react'
import './Fotter.css'
import { assets } from '../../assets/assets'

const Fotter = () => {
  return (
    <div className='Fotter' id="Fotter">
        <div className="Fotter-contact">
          <h1>EAT IT – Your Favorite Food, Just a Tap Away!</h1>
          <hr />
            <div className="contact">
              <div className="c-left">
              <h3>🍕 Tastiest Dishes, Fastest Delivery</h3>
              <h3>🚀 Order, Track & Enjoy</h3>
              <h3>⭐ Quality You Can Trust</h3>
              <h3>📍 Serving Cities Across the Country </h3>
              <h3>🕒 Available 24/7</h3>
              <h3>🔒 Safe & Secure Payments</h3> 
              </div>
              <div className="c-right">
              <h3>💬 Have Questions? We’re Here to Help!</h3>
              <h3>📧 Email: support@eatit.com</h3> 
              <h3>☎️ Call: +1 234 567 890</h3>
              <div className="suport">
                <h3>🌍 Follow Us for Updates & Offers:</h3>
                <div className="support-images">
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.linkedin_icon} alt="linkedin" />
                <img src={assets.twitter_icon} alt="twitter" />
              </div>
              </div>
              </div>
            </div>
        </div>
        <div className="cpyright">
          <h1>VIPUL © 2025 EAT IT. All Rights Reserved.</h1>
        </div>
    </div>
  )
}

export default Fotter