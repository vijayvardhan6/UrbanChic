import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.css"
import axios from "axios"

const FeaturedProducts = ({ type }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`, {
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
        <div className='container FeaturedProducts'>
            <h4>{type}</h4>
            <div className="row">
                {data?.map((item) => {
                    return <div className='col-md-3 col-sm-6' key={item.id}>
                        <Card item={item} /></div>
                }
                )}
            </div>
        </div>
    )
}

export default FeaturedProducts