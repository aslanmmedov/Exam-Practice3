import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { WishlistContext } from '../../Context/MenuWishlist';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import styles from "./index.module.scss"
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate(null);
    const BASE_URL = "http://localhost:8080"
    const [data, setData] = useState();
    const { favorites, toggleWishlist } = useContext(WishlistContext);
    const getAllData = async () => {
        const daata = await axios(`${BASE_URL}/${id}`);
        setData(daata.data.data)
    }

    const getDetail = (id) => {
        navigate(-1);
    }
    useEffect(() => {
        getAllData();
        console.log(data)
    }, [])
    return (
        <>
        <Helmet>
                <title>{data&& data.name}</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
              </Helmet>
        <section>
        {data && 
        <div className="container">
            <div className="row">
            </div>
            <div className="col-6 col-sm-12" key={data._id}>
                <div className={`${styles.card} row`}>

                        <div className={styles.cardimg}>
                            <img src={data.image} alt={data.name} />
                        </div>
                        <div className={styles.cardtext}>
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                        </div>

                        <div className={styles.cardprice}>
                            <h1>${data.price}</h1>
                            <button onClick={() => toggleWishlist(data)}>{favorites.find((f) => f._id === data._id) ? <FaHeart /> : <CiHeart />}</button>
                            <button onClick={() => getDetail(data._id)}><FaInfoCircle /></button>
                        </div>
                    </div>
                </div>
            </div>
}
        </section>
            
        </>
    )
}

export default Detail