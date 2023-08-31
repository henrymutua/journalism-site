import React from 'react'
import styles from './SideBar.module.css'
import Header from '../Header/Header';
import CloseIcon from '../CloseIcon/CloseIcon';
import Link from 'next/link'


interface SideBarProps{
    active: boolean;
    onClose: () => void;
}

const SideBar: React.FC<SideBarProps> =( { active, onClose }) =>{
   
    
    return(
        <div className= {`${styles.sidebar} ${active ? styles.active : ''}`}>
            <div className={styles.heading}>
               <CloseIcon onClick={onClose}/>
            </div>
            <div className={styles.sidebarMenu}>
                <div className={styles.ItemOne}><Link href='/'>HOME</Link></div>
                <div className={styles.ItemTwo}><Link href='/Features'>FEATURES</Link></div>
                 <div className={styles.ItemThree}><Link href='/Archives'>ARCHIVES</Link></div>
                 <div className={styles.ItemFour}><Link href='/About'>ABOUT</Link></div>
                 <div className={styles.ItemFive}><Link href='/Masthead'>MASTHEAD</Link></div>
                 <div className={styles.ItemSix}><Link href='/Careers'>CAREERS</Link></div>
                 <div className={styles.ItemSeven}><Link href='/Events'>EVENTS</Link></div>
                 
            </div>



        </div>
    )

}

export default SideBar;