import React from 'react';
import styles from './mainPage.module.css';
import Logo from '../assets/logo.png';
import BannerImg from '../assets/banner.png';
import Partner1 from '../assets/logo_partner1.png';
import Partner2 from '../assets/logo_partner2.png';
import Partner3 from '../assets/logo_partner3.png';
import Partner4 from '../assets/logo_partner4.png';
import Partner5 from '../assets/logo_partner5.png';
import BodyImg from '../assets/image_body.png';
import FeedComponent from '../feedComponent/feedComponent';
import { Link } from "react-router-dom";


function MainPage () {

    const search = window.location.search;
    const params = new URLSearchParams(search);

    return (
        <div className={styles.container}>
            {/*header*/}
            <div className={styles.bannerContainer}>
                
                <div className={styles.tidalZone}>
                    <img src={Logo} alt="tidal" />
                    <Link to="/quiz" className={styles.btn1}>START QUIZ</Link>
                </div>
                
                <div className={styles.bannerSectionBackground}>                
                    <div className={styles.bannerSection}>
                        <p className={[styles.smallText, styles.hideSmall].join(" ")}>Attention online advertisement</p>
                        <h1 className={styles.mainTitle}>What’s Your Online Advertising Readiness Rating?</h1>
                        <p className={styles.mainText}>When you take this quiz, you’ll get a free report that outlines YOUR Readiness Rating.</p>
                        <Link to="/quiz" className={styles.btn2}>Start quiz</Link>
                        <p className={styles.mainLink}>Learn more about Readiness Raitings</p>
                    </div>
                </div>

                <div className={[styles.bannerImageContainer, styles.hideSmall].join(" ")}>
                    <img src={BannerImg} alt="banner" className={styles.bannerImage}/>
                    <div className={styles.bannerImageTextContainer}>
                        <p className={styles.bannerImageText}>Learning about my rating - and WHAT to do about it, has really changed the way I do online advertising. It is all about being a master at this craft, and staying there. Andrea - Barranquilla, Colombia.</p>
                    </div>
                </div>
            
            </div>

            {/*section partners*/}
            <div className={[styles.partnerSection, styles.hideSmall].join(" ")}>
                <img src={Partner1} alt="forbes"/>
                <img src={Partner2} alt="times"/>
                <img src={Partner3} alt="telegraph"/>
                <img src={Partner4} alt="guardian"/>
                <img src={Partner5} alt="usa today"/>
            </div>
            
            
            <div className={styles.body}>
                {/*section 1: kindle*/}
                <FeedComponent 
                    feedURL={params.get('url')}
                    feedLimit={parseInt(params.get('limit'))}
                    updateInterval={params.get('interval')}
                />

                {/*section 2*/}
                <div className={styles.section2}>
                    <div className={styles.section2textContainer}>
                        <p className={styles.smallText}>WHY IT IS IMPORTANT</p>
                        <h2 className={styles.mainTitle}>Knowing Your Online Ads Readiness Raiting...</h2>
                        <p className={styles.mainText} style={{textAlign:"start"}}>
                            ...will help you understand just how bullish you should be with your ad spend and where your blind spots are.
                            <br />
                            When it comes to online advertising the more informed and ready you are, the more effective your advertising will be (and the greater your chances of a healthy Return on your Ad Spend (ROAS)).
                            <br />
                            Find Out your Online Advertising Readiness Rating so you can make more money and avoid risks with your online advertising.
                        </p>
                    </div>
                    <img src={BodyImg} alt="your online ad reports" className={styles.bodyImage}/>
                </div>
            </div>

            <div className={styles.section3}>
                <p className={styles.section3text}>Find Out YOUR Online Advertising Readiness Rating!</p>
                <Link to="/quiz" className={[styles.btn2, styles.floatBottom].join(" ")}>START QUIZ</Link>
            </div>

            
            {/*footer*/}
            <div className={styles.footer}>
                <img src={Logo} alt="tidal" />
                <p>©2019 Tidal Traffic. All rights reserved.</p>
                <p className={styles.hideSmall}>About Us | Terms of Service | Privacy Policy</p>
            </div>

        </div>
    );
}

export default MainPage;