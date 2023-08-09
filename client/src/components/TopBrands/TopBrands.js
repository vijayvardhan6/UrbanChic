import React from 'react'
import "./TopBrands.css"
import nike from "../../img/Brands/nike.webp" 
import dior from "../../img/Brands/dior.webp" 
import levis from "../../img/Brands/levis.webp" 
import puma from "../../img/Brands/puma.webp" 
import underarmour from "../../img/Brands/underarmour.webp" 
import gucci from "../../img/Brands/gucci.webp" 


const TopBrands = () => {
    return (
        <div className='topbrands container my-4'>
            <h4 >Top Brands</h4>
            <div className="row ">
                <div className="brand col-md-2 col-sm-4">
                    <img src={puma} alt="Loading takes some time" />
                </div>
                <div className="brand col-md-2 col-sm-4">
                    <img src={nike}alt="Loading takes some time" />
                </div>
                <div className="brand col-md-2 col-sm-4">
                    <img src={gucci} alt="Loading takes some time" />
                </div>
                <div className="brand col-md-2 col-sm-4">
                    <img src={underarmour} alt="Loading takes some time" />
                </div>
                <div className="brand col-md-2 col-sm-4">
                    <img src={levis} alt="Loading takes some time" />
                </div>
                <div className="brand col-md-2 col-sm-4">
                    <img src={dior} alt="Loading takes some time" />
                </div>
            </div>
        </div>

    )
}

export default TopBrands