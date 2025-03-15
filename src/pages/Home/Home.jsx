import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDsiplay/FoodDisplay'
import About from '../../components/About/About'

const Home = () => {
  const [category,setcategory]= useState("All");

  return (
    <div className='main-header121' id="mainheader121">
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <About/>
    </div>
  )
}

export default Home