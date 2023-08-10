import React from 'react';
import styles from './NavMenu.module.css';
import { Hamburger, SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon } from '../Icons/Icons';

const NavMenu = () => {
    return(
        <div className={styles.NavMenu}>
            <div className={styles.NavMenuItemOne}>
                <Hamburger/>
                <SearchIcon/>
            </div>
            <div className={styles.NavMenuItemTwo}>
                <div className={styles.ItemOne}>LATEST</div>
                <div className={styles.ItemTwo}>FEATURES</div>
                <div className={styles.ItemThree}>ARCHIVES</div>
                <div className={styles.ItemFour}>ABOUT</div>
                <div className={styles.ItemFive}>MASTHEAD</div>
            </div>
            <div className={styles.NavMenuItemThree}>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </div>
        </div>
    )
}

export default NavMenu;