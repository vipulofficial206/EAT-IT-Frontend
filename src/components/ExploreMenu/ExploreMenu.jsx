import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div id="explore-menu">
    <div className='explore-menu'>
        <h1>Explore Our Menu – Taste the Hype! 🍕</h1>
        <p className='Explore-menu-text'>"Feeling hungry? We’ve got the flavors to match your cravings! Dive into a world of mouthwatering burgers, cheesy pizzas, spicy wings, and so much more. Whether you're all about comfort food or looking for something new, EAT IT brings the best bites straight to you. Scroll, pick, and feast—because good food waits for no one! 🚀🍽️"</p>
        <div className="EXplore-menu-list">
          {menu_list.map((item,index)=>(

              <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">

                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />

                <p>{item.menu_name}</p>
              </div>
          ))} 
        </div>
        <h5 className='direction'>Select To Filter & Drag to view more</h5>
        <hr></hr>
    </div>
    </div>
  )
}

export default ExploreMenu