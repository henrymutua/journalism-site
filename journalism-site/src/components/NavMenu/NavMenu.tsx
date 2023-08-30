"use client";
import React, { useState } from 'react';
import styles from './NavMenu.module.css';
import { SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon} from '../Icons/Icons';
import Hamburger from '../Hamburger/HamburgerIcon';
import SideBar from '../SideBar/SideBar';

const NavMenu = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
    
    return(
        <div className={styles.NavMenu}>
            <div className={styles.NavMenuItemOne}>
                
                    <Hamburger onClick={toggleSidebar} isOpen={sidebarOpen} />
            
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
            {sidebarOpen && <SideBar isOpen={sidebarOpen} onClose={toggleSidebar} />}
        </div>
    )
}

export default NavMenu;