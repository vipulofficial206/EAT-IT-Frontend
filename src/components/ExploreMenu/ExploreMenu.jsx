import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div id="explore-menu">
    <div className='explore-menu'>
        <h1>Every Craving Finds a Category</h1>
        <p className='Explore-menu-text'>Welcome to a world where taste meets choice. 
          From sizzling street food to gourmet delights, explore a wide range of categories that satisfy your every craving. 
          Whether you're in the mood for something spicy, sweet, or savory, we've got it all. 
          Just pick your favorite category and let the feast begin!</p>
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