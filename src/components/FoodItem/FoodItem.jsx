import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { Storecontext } from '../../context/Storecontext'

const FoodItem = ({id,name,price,image,description}) => {

    const {cartItems,AddToCart,removeFromCart} = useContext(Storecontext);

  return (
    <div className='Fooditem'>
        <div className="food-item-img-con">
            <img className="food-img" src={image} alt={name} />
            {!cartItems[id]
            ?<img className="add" onClick={()=>AddToCart(id)} src={assets.add_icon_white} alt="add" />
            :<div className="food-item-counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>AddToCart(id)} src={assets.add_icon_green} alt="add" />
            </div>
            }
        </div>
        <div className="food-item-info">
            <div className="fooditem-name-rating">
                <h3>{name}</h3>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">
                {description}
            </p>
            <p className="food-item-price">
            ₹{price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem