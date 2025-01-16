import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/MenuWishlist';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import styles from "./index.module.scss"
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Wishlist = () => {
    const { id } = useParams();
    const navigate = useNavigate(null);
    const { favorites, toggleWishlist } = useContext(WishlistContext);

    const getDetail = (id) => {
        navigate(-1);
    }

    return (
        <>
        <Helmet>
                <title>Favorites Page</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
              </Helmet>
            <section>
                <div className="container">
                    <div className="row">
                        {favorites && favorites.map((p) => (
                            <div className="col-6 col-sm-12" key={p._id}>
                                <div className={`${styles.card} row`}>
                                        <div className={styles.cardimg}>
                                            <img src={p.image} alt={p.name} />
                                        </div>


                                        <div className={styles.cardtext}>
                                            <h3>{p.name}</h3>
                                            <p>{p.description}</p>
                                        </div>
                                        <div className={styles.cardprice}>
                                            <h1>${p.price}</h1>
                                            <button onClick={() => toggleWishlist(p)}>{favorites.find((f) => f._id === p._id) ? <FaHeart /> : <CiHeart />}</button>
                                            <button onClick={() => getDetail(p._id)}><FaInfoCircle /></button>
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

export default Wishlist