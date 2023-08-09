import React from 'react'
import "./Home.css"
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
//import Banner from '../../components/Banners/Banner'
import TopBrands from '../../components/TopBrands/TopBrands'
import Testimonials from '../../components/Testimonials/Testimonials'
//import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div className="home">
       <Slider/>
       <FeaturedProducts type="Featured Products" />
       <FeaturedProducts type="Trending Products"/>
       <TopBrands/>
       <FeaturedProducts type="New Arrivals"/>
       <Testimonials/>
    </div>
  )
}

export default Home