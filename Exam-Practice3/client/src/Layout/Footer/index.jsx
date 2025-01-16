import React from 'react'
import styles from "./index.module.scss"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                            <div className="col-3 col-sm-12 ">
                                <div className={styles.first}>
                                    <h3>Tasty</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iusto sunt optio magni corporis porro?</p>
                                    <div className={styles.footerLinks}>
                                        <button><FaTwitter /></button>
                                        <button><FaInstagram /></button>
                                        <button><FaFacebookF /></button>
                                    </div>
                                </div>

                            </div>
                            <div className=" col-3 col-sm-12">
                                <div className={styles.first}>
                                    <h3>Opening Hours</h3>
                                    <ul>
                                        <li>Monday:08-22:00</li>
                                        <li>Tuesday:08-22:00</li>
                                        <li>Wednesday:08-22:00</li>
                                        <li>Thursday:08-22:00</li>
                                        <li>Friday:08-22:00</li>
                                        <li>Sturday:08-22:00</li>
                                        <li>Sunday:08-22:00</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3 col-sm-12 ">
                                <div className={styles.first}><h3>Contact Information</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, in?</p>
                                </div>

                            </div>
                            <div className=" col-3 col-sm-12">
                                <div className={styles.first}>
                                    <h3>Newsletter</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, est?</p>
                                    <input type="text" placeholder="Subscribe" />
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        </>
    )
}

export default Footer