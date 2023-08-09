import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <div className="container main-footer my-4">
            <footer className="footer py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h4>Shop By</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Men</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Women</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Children</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Brands</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Stores</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">New Arrivals</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Accessories</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h4>Help</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Track Your Order</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Returns</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Cancellations</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Customer Care</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Payments</a></li>
                            <li className="nav-item mb-2"><a href=" " className="nav-link p-0 text-muted">Coupons</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h4>Section</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                    

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h4>Subscribe to our newsletter</h4>
                            <p>Monthly digest of what's new and exciting from us.</p><br />
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                
                                <input id="newsletter1" type="text" className="form-control" placeholder="Enter yout Email address" />
                                <button className="btn" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p><span>&copy;</span> 2022 Company, Inc. All rights reserved.</p>
                    <ul className="icons list-unstyled d-flex">
                       <li><FacebookIcon/></li>
                       <li><InstagramIcon/></li>
                       <li><YouTubeIcon/></li>
                       <li><TwitterIcon/></li>
                       <li><PinterestIcon/></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer