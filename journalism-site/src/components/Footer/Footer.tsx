import React from 'react';
import styles from './Footer.module.css';
import { FacebookIcon } from '../Icons';
import { TwitterIcon } from '../Icons';
import { InstagramIcon } from '../Icons';
import Header from '@/components/Header/Header'

const Footer = () =>{
    return(
        <div className={styles.Footer}>
            <div className={styles.FooterOne}>
                <Header/>
                <p>COPYRIGHT &copy; CHEKI {new Date().getFullYear()}</p>
            </div>
            <div className={styles.FooterTwo}>
                <p>STAY IN TOUCH:</p>
                <div className={styles.FooterIcons}>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                </div>
            </div>
            <div className={styles.FooterThree}>
            <div className={styles.FooterItemOne}>LATEST</div>
                <div className={styles.FooterItemTwo}>FEATURES</div>
                <div className={styles.FooterItemThree}>ARCHIVES</div>
                <div className={styles.FooterItemFour}>ABOUT</div>
                <div className={styles.FooterItemFive}>MASTHEAD</div>
                <div className={styles.FooterItemSix}>CAREERS</div>
                <div className={styles.FooterItemSeven}>EVENTS</div>
            </div>
        </div>
    )
}

export default Footer;