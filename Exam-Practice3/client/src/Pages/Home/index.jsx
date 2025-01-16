import React, { useContext, useEffect, useState } from 'react'
import styles from "./index.module.scss"
import { GiMeat } from "react-icons/gi";
import axios from "axios";
import { MdOutlineNoDrinks } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { WishlistContext } from '../../Context/MenuWishlist';
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const navigate = useNavigate(null);
    const {favorites,toggleWishlist} = useContext(WishlistContext);
    const BASE_URL = "http://localhost:8080/"
    const [products, setProducts] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    const getAllData = async () => {
        const data = await axios(`${BASE_URL}`);
        setProducts(data.data.data)
    }

    const filteredData = products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const getDetail = (id) => {
        navigate(`/${id}`);
    }
    useEffect(() => {
        getAllData();
    }, [])
    return (
        <>
        <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <main>
                <div className="container">
                    <div className={styles.herobannerText}>
                        <div className={styles.content}>
                            <h2>Book a table for yourself at a time convenient for you</h2>
                            <button>Book a table</button>
                        </div>
                    </div>
                </div>
            </main>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <div className={styles.cardImage}>
                                <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <div className={styles.cardHolder}>
                                <div className={styles.cardTitle}>
                                    <span>ABOUT TASTY</span>
                                    <h1>Our Chef cooks the most delicios food for you</h1>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className={styles.sectionHead}>
                        <h1>Discover Our Exclusive Menu</h1>
                    </div>
                    <div className={styles.searchandsort}>
                        <input type="text" placeholder='Search by name' onChange={(e) => setSearchQuery(e.target.value)} />  
                    </div>
                    <div className={styles.menuButtons}>
                        <button><GiMeat />Main</button>
                        <button><LuDessert />Dessert</button>
                        <button><MdOutlineNoDrinks />Drinks</button>
                    </div>
                    <div className="row">
                        {filteredData && filteredData.map((p) => (
                            <div className="col-6 col-sm-12" key={p._id}>
                                <div className={`${styles.card} row`}>

                                    <div className="col-3">
                                        <div className={styles.cardimg}>
                                            <img src={p.image} alt={p.name} />
                                        </div>

                                    </div>
                                    <div className="col-6">
                                        <div className={styles.cardtext}>
                                            <h3>{p.name}</h3>
                                            <p>{p.description}</p>
                                        </div>

                                    </div>
                                    <div className="col-3" style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <div className={styles.cardprice}>
                                            <h1>${p.price}</h1>
                                            <button onClick={() => toggleWishlist(p)}>{favorites.find((f) => f._id === p._id)?<FaHeart />:<CiHeart />}</button>
                                            <button onClick={() => getDetail(p._id) }><FaInfoCircle /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )}


                    </div>
                </div>
            </section >
        </>


    )
}

export default Home