import React, { useContext, useState } from 'react';
import './Order.css';
import { Storecontext } from '../../context/Storecontext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const { getTotalAmount} = useContext(Storecontext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { firstName, lastName, email, street, city, state, phoneNumber } = formData;

    if (!firstName || !lastName || !email || !street || !city || !state || !phoneNumber) {
      alert("Please fill in All required fields.");
      return;
    }

    alert("You will Receive Your Tasty Food in a few Minutes");
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="OrderPage">
    {getTotalAmount() ? (
      <>
        <div className="OrderPageLeft">
          <h4>🏠 Delivery Address</h4>
          <p>"Where should we bring your delicious meal?<br /><br /> Enter your details for a seamless delivery!"</p>
          <div className="multiFields">
            <input type="text" name="firstName" placeholder="First name" required onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last name" required onChange={handleChange} />
          </div>
          <div className="multiFields">
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="text" name="street" placeholder="Street" required onChange={handleChange} />
          </div>
          <div className="multiFields">
            <input type="text" name="city" placeholder="City" required onChange={handleChange} />
            <input type="text" name="state" placeholder="State" required onChange={handleChange} />
          </div>
          <div className="multiFields">
            <input type="text" name="phoneNumber" placeholder="+91 Phone Number" required onChange={handleChange} />
            <input type="text" placeholder="India" disabled />
          </div>
        </div>
  
        <div className="checkoutBox">
          <h1>Check Out</h1>
          <hr />
          <div className="Total-price">
            <h2>Sub-Total :</h2>
            <h2> ₹ {getTotalAmount()}</h2>
          </div>
          <div className="DeliveryCharge">
            <h2>Delivery-Charge :</h2>
            <h2>₹ 20</h2>
          </div>
          <hr />
          <div className="SumOfTotal">
            <h2>Total Cost :</h2>
            <h2> ₹ {getTotalAmount() + 20}</h2>
          </div>
          <button onClick={handleSubmit}>Proceed To Buy</button>
        </div>
      </>
    ) : (
      <div className='page-After'>
                  <h1>Order Placed successfully !!!</h1>
                  <div className='NoItem'>
                  <p>Want to Taste some More Tasty Food :</p>
                  <Link to="/"><button>Click here</button></Link>
             </div>
      </div>
    )}
  </div>
  
  );
};

export default Order;