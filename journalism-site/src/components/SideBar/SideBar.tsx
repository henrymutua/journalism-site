import React from 'react'
import styles from './SideBar.module.css'
import CloseIcon from '../CloseIcon/CloseIcon'

interface SideBarProps{
    isOpen: boolean;
    onClose: () => void;
}

const SideBar: React.FC<SideBarProps> =( { isOpen, onClose }) =>{
   
    
    return(
        <div className= {`sidebar ${isOpen ? 'active' : ''}`}>
            <div className={styles.heading}>
                <CloseIcon onClick={onClose}/>
            </div>
            <ul>
              <li>  <div className={styles.ItemOne}>LATEST</div></li>
               <li> <div className={styles.ItemTwo}>FEATURES</div></li>
                <li> <div className={styles.ItemThree}>ARCHIVES</div></li>
                <li> <div className={styles.ItemFour}>ABOUT</div></li>
                <li> <div className={styles.ItemFive}>MASTHEAD</div></li>
                <li> <div className={styles.ItemSix}>CAREERS</div></li>
                <li> <div className={styles.ItemSeven}>EVENTS</div></li>
                </ul>



        </div>
    )

}

export default SideBar;