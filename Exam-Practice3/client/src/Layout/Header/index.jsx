import React from 'react'
import { IoMenu } from "react-icons/io5";
import styles from "./index.module.scss";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className={styles.head}>
                            <div className={styles.logo}>
                                <h3>Tasty</h3>
                            </div>
                            <div className={styles.nav}>
                                <ul>
                                    <li><NavLink to = "/">Home</NavLink></li>
                                    <li><NavLink to = "/wishlist">Favorites</NavLink></li>
                                    <li><NavLink to = "/add">Add</NavLink></li>
                                </ul>
                            </div>
                            <div className={styles.menu}>
                                <IoMenu />
                                <h3>MENU</h3>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header