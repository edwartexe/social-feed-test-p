import React from 'react';
import styles from '../mainPage/mainPage.module.css';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";


function QuizPage () {
    return(
    <div>
        <div className={styles.section3}>
            <p className={styles.section3text}>Under construction</p>
            <Link to="/" className={[styles.btn2, styles.floatBottom].join(" ")}>GO BACK</Link>
        </div>

        
        {/*footer*/}
        <div className={styles.footer}>
            <img src={Logo} alt="tidal" />
            <p>©2019 Tidal Traffic. All rights reserved.</p>
            <p className={styles.hideSmall}>About Us | Terms of Service | Privacy Policy</p>
        </div>
    </div>
    )
}

export default QuizPage;