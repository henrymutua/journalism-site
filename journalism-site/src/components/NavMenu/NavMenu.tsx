"use client";
import React, { useState } from 'react';
import styles from './NavMenu.module.css';
import { SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon} from '../Icons/Icons';
import Hamburger from '../Hamburger/HamburgerIcon';
import SideBar from '../SideBar/SideBar';
import Link from 'next/link';
import newsArticle, { Article } from '../../data/data';


const NavMenu = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
    
  
    return(
        <div className={styles.NavMenu}>
            <div className={styles.NavMenuItemOne}>
                
                    <Hamburger onClick={toggleSidebar} />
                    
                    
            
          
            </div>
            <div className={styles.NavMenuItemTwo}>
            <div className={styles.ItemOne}><Link href='/'>HOME</Link></div>
                <div className={styles.ItemTwo}><Link href='/Features'>FEATURES</Link></div>
                 <div className={styles.ItemThree}><Link href='/Archives'>ARCHIVES</Link></div>
                 <div className={styles.ItemFour}><Link href='/About'>ABOUT</Link></div>
                 <div className={styles.ItemFive}><Link href='/Masthead'>MASTHEAD</Link></div>
                 <div className={styles.ItemSix}><Link href='/Careers'>CAREERS</Link></div>
                 <div className={styles.ItemSeven}><Link href='/Events'>EVENTS</Link></div>
            </div>
            <div className={styles.NavMenuItemThree}>
                <a href="https://www.facebook.com/Creatives.Garage/"><FacebookIcon/></a>
                <a href="https://twitter.com/cr8vesgarage"><TwitterIcon/></a>
                <a href="https://www.instagram.com/creativesgarage/"><InstagramIcon/></a>
            </div>
            {sidebarOpen && <SideBar active={sidebarOpen} onClose={toggleSidebar} />}
        </div>
    )
}

export default NavMenu;