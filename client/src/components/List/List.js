    import Card from '../Card/Card'
    import React, { useEffect, useState } from 'react'
    import "./List.css"
    import axios from "axios"

    const List = () => {
        const [data, setData] = useState(null);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    let url = 'http://localhost:1337/api/products?populate=*';
            
                    const res = await axios.get(url, {
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

        console.log(data)
        return (
            <div className='container list'>
                <div className="row">
                    {data?.map((item) => {
                        return <div className="col-md-4 col-sm-6" key={item.id}>
                            <Card item={item} />
                        </div>
                    })}
                </div>
            </div>
        )
    }

    export default List