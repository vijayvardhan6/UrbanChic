import React, { useEffect, useState } from 'react'
import "./Product.css"
import { useParams } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:1337/api/products/${id}?populate=*`, {
          headers: {
            Authorization: "bearer" + process.env.REACT_APP_API_TOKEN
          },
        }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <div className='single-product container d-flex'>
        <div className="product-left">
          <div className="header">
            <p><span> Home  / </span>{data?.attributes.title}</p>
          </div>
          <div className="image">
            <img src={
              'http://localhost:1337' + data?.attributes?.img?.data?.attributes?.url
            } alt="" />

          </div>
        </div>
        <div className="product-right">
          <div className="product-title ">
            <h4>{data?.attributes?.title}</h4>
          </div>
          <div className="product-desc my-2">
            <p >{data?.attributes?.desc}</p>
          </div>

          <div className="product-ratings d-flex">
            <div className="stars my-1">
              <ul className="ratings list-unstyled d-flex">
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning"></i>
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                </li>
              </ul>
            </div>
            <div className="noofratings">
              <p> &nbsp; <span> 4.5 | 468 Ratings</span></p>
            </div>
          </div>
          <hr />
          <div className="product-price">
            <h4>$ {data?.attributes?.price}</h4>
            <p>inclusive of all taxes</p>
          </div>
          <div className="quantity">
            <button className="bt increment" onClick={decrement}>-</button>
            <button className="bt quant">{quantity}</button>
            <button className="bt decrement" onClick={increment}>+</button>
          </div>
          <div className="bag-wishlist my-4">
            <button type="button" className="btn button-bag " onClick={()=>dispatch(addToCart({ 
              id: data.id,
              title: data.attributes.title,
              desc:data.attributes.desc,
              price:data.attributes.price,
              img:data.attributes.img.data.attributes.url,
              quantity,
            }))}><ShoppingBagIcon /> ADD TO BAG
            </button>
            <button type="button" className="btn button-love mx-3"><FavoriteBorderIcon /> WHISLIST
            </button>
          </div>
          <hr />
          <div className="delivery my-3">
            <h4>Delivery Options</h4>
            <p>&#9654; 100% Original Products</p>
            <p>&#9654; Pay on delivery might be available</p>
            <p>&#9654; Easy 30 days returns and exchanges</p>
            <p>&#9654; Try & Buy might be available</p>
          </div>
        </div>
      </div>
      <div className="container product-bottom">
        <FeaturedProducts type="Trending Products" />
      </div>
    </>
  )
}

export default Product