import React, { useState } from 'react'
import "./Navbar.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom";
import Cart from '../../pages/Cart/Cart';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector(state => state.cart.products)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">UrbanChic</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Men Wear<KeyboardArrowDownIcon /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Women Wear<KeyboardArrowDownIcon /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Kids<KeyboardArrowDownIcon /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">FootWear<KeyboardArrowDownIcon /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Accessories<KeyboardArrowDownIcon /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Blogs</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder='Search on Urban Chic' aria-label="Search" />
                        </form>
                        <button className="btn" type="submit">
                            <Link className="nav-link" to="/signin">Sign In</Link>
                        </button>
                        {/* <div className="love"><FavoriteBorderIcon /></div> */}
                        <div className="ShoppingBag" onClick={() => setOpen(!open)}>
                            <ShoppingBagIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </nav>
            {open && <Cart />}
        </>
    )
}

export default Navbar
