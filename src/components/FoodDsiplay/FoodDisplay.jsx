import React, { useContext } from 'react'
import './FoodDisplay.css'
import { Storecontext } from '../../context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(Storecontext)
  return (
    <div className='FoodDisplay' id='FoodDisplay'>
        <h2 className='disp-heading'>Explore Our Delicious Menu 🍔</h2>
        <p>Craving something tasty? Dive into our diverse menu, featuring a mix of mouthwatering dishes from around the world. From sizzling South Indian dosas to cheesy American burgers, spicy biryanis, and crispy fries, we have something for everyone.
        Browse through our carefully curated selections, pick your favorites, and get them delivered hot and fresh to your doorstep. EAT IT makes ordering food easy, fast, and satisfying.
        </p>
        <h3>🚀 Tap, Order, and Enjoy!</h3>
        <div className="food-list-items-disp">
            {food_list.map((item,index)=>{
              if(category==="All" || category === item.category){
                return <FoodItem key={index} id={item._id} name={item.name}  description ={item.description} price={item.price} image={item.image}/>
              }
              })

            }
        </div>
    </div>
  )
}

export default FoodDisplay