"use client";
import React, { useState } from 'react';
import styles from './NavMenu.module.css';
import { SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon} from '../Icons/Icons';
import Hamburger from '../Hamburger/HamburgerIcon';
import SideBar from '../SideBar/SideBar';
import Link from 'next/link';
import newsArticle, { Article } from '../../data/data';
import { useRouter } from 'next/router';

const NavMenu = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false); // State to track search input visibility
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Article[]>([]);
    const router =useRouter();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
    
  
  const toggleSearch = () => {
    setSearchVisible(!searchVisible); // Toggle search input visibility
  };

  const handleSearch = () => {
    // Filter articles based on the searchQuery
    const results = newsArticle.filter((article) => {
      return (
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    // Set the searchResults state with the matching results
    setSearchResults(results);
    router.push(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };




  
    return(
        <div className={styles.NavMenu}>
            <div className={styles.NavMenuItemOne}>
                
                    <Hamburger onClick={toggleSidebar} />
                    
                    
            
                    <div onClick={toggleSearch} className={styles.SearchIcon}>
          <SearchIcon />
        </div>
        {/* Display search input when searchVisible is true */}
        {searchVisible && (
          <div className={styles.SearchContainer}>
            <input
              type="text"
              placeholder="Search for an article"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span onClick={handleSearch} className={styles.SearchIcon}>
              <SearchIcon />
            </span>
          </div>
        )}
        {/* Display search results here */}
        {/* {searchResults.length > 0 && (
          <div className={styles.SearchResults}>
            <ul>
              {searchResults.map((article, index) => (
                <li key={index}>
                  <h2>{article.title}</h2>
                  <p>{article.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )} */}
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