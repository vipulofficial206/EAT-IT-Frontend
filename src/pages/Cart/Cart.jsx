import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../context/Storecontext'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { food_list,cartItems,AddToCart,removeFromCart,getTotalAmount} = useContext(Storecontext);
  const isCartEmpty = !food_list.some(item => cartItems[item._id] > 0);

  return (
    <div className='Cart'>
      <div className="CartItems">
        <h1>Welcome To Your Cart 🛒</h1>
        <hr />
        {isCartEmpty ? (
          <div>
            <h1>No Items In Your Cart </h1>
            <div className='NoItem'>
            <p>Want to Taste some Hot Food :</p>
            <Link to="/"><button>Click here</button></Link>
            </div>
            <hr />
          </div>
        ) : (
          <div>
        <div className="CartItemTitle">
          <p>Items</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(<div>
              <div className='CartItemTitle1'>
                <img className="MainImage" src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <img className="SubImage img1" onClick={()=>AddToCart(item._id)} src={assets.add_icon_white} alt="" />
                <img className="SubImage img2" onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
              </div>
              <hr />
              </div>
              
            )
          }
        })}
        <h1>Total Amount</h1>
        <div className="maincheckoutbox">
         <div className='checkoutBox'>
                <div className="Total-price">
                  <h2>Sub-Total :</h2>
                  <h2> ₹ {getTotalAmount()}</h2>
                </div>
                <div className="DeliveryCharge">
                  <h2>Deliver-Charge :</h2>
                  <h2>₹ 20</h2>
                </div>
                <hr/>
                <div className="SumOfTotal">
                <h2>Total Cost :</h2>
                <h2> ₹ {getTotalAmount()+20}</h2>
                </div>
              </div>
              <div className="CouponCode">
                  <h3>Enter Your Coupon Code Here :</h3>
                 <input type="text" placeholder='Coupon Code'/> 
                </div>
                </div>
              <div className="proceed-checkout-button">
               <Link to ="/Order"><button>Proceed To Check Out</button></Link> 
              </div>
      </div>)}
      </div>
    </div>
  )
}

export default Cart