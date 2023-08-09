import React from 'react'
import banner1 from "../../img/Banner/banner1.webp"
import banner2 from "../../img/Banner/banner2.webp"
import "./Banner.css"


const Banner = () => {
  return (
    <div className='banner container '> 
        <div className="banner1">
            <img src={banner1} alt="Loading takes some time" />
        </div>
        <div className="banner2">
            <img src={banner2} alt="Loading takes some time" />
        </div>
    </div>
  )
}

export default Banner