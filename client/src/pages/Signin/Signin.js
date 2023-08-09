import React from 'react'
import { Link } from "react-router-dom";
import top4 from "../../img/ProductItems/top4.webp"
import "./Signin.css"

const Signin = () => {
    return (
        <Link className="link" to={`/signin`}>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="img">
                                    <img src={top4} alt="" />
                                </div>
                                <div className="login-wrap p-4 p-md-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h4 className="mb-4">Sign In</h4>
                                        </div>
                                        
                                    </div>
                                    <form action="#" className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label" for="name">Username</label>
                                            <input type="text" className="form-control" placeholder="Username" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label" for="password">Password</label>
                                            <input type="password" className="form-control" placeholder="Password" required />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50 text-left">
                                                <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                                    <input type="checkbox" checked />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a href="/">Forgot Password</a>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    )
}

export default Signin


