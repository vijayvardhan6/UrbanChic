import React from 'react'
import "./Card.css"
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    return (
        <Link className="link" to={`/product/${item?.id}`}>
            <div className="my-3">
                <div className="card">
                    <img src={"http://localhost:1337" + item.attributes?.img?.data?.attributes?.url} className="card-img-top" alt="Loading may take some time" />
                    <div className="card-body">
                        <div className='desc d-flex'>
                            <h6 className="card-title">{item?.attributes.title}</h6>
                            <ul className="ratings list-unstyled d-flex justify-content-center mx-3">
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
                        <p className="card-name">{item?.attributes.desc}</p>
                        <p className="card-price"><span>$ {item?.attributes.price}</span></p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card