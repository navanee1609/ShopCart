import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import Locationspread from './LoacationSpread'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <Locationspread/>
      <AboutUs/>
      
    </div>
  )
}

export default Home