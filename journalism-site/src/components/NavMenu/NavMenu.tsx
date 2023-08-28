import React from 'react';
import styles from './NavMenu.module.css';
import { Hamburger, SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon } from '../Icons/Icons';
import { useState, useContext } from 'react';

const NavMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <div className={styles.NavMenu}>
            <div className={styles.NavMenuItemOne}>
                <Hamburger onClick ={toggleMenu}/>
                    {isMenuOpen && (
                        <div className={styles.MenuOverlay}>
                          <div className={styles.MenuList}>
                            <ul>
                              <li>Menu Item 1</li>
                              <li>Menu Item 2</li>
                              {/* Add more menu items */}
                            </ul>
                          </div>
                        </div>
                      )}
                    
            
                <SearchIcon/>
            </div>
            <div className={styles.NavMenuItemTwo}>
                <div className={styles.ItemOne}>LATEST</div>
                <div className={styles.ItemTwo}>FEATURES</div>
                <div className={styles.ItemThree}>ARCHIVES</div>
                <div className={styles.ItemFour}>ABOUT</div>
                <div className={styles.ItemFive}>MASTHEAD</div>
                <div className={styles.ItemSix}>CAREERS</div>
                <div className={styles.ItemSeven}>EVENTS</div>
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