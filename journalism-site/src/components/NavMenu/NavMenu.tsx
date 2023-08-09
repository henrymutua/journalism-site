import React from 'react';
import styles from './NavMenu.module.css';


const NavMenu = () => {
    return(
        <div className={styles.NavMenu}>
            <div className={styles.NavMenuItemOne}>
                <IconOne/>
                <IconTwo/>
            </div>
            <div className={styles.NavMenuItemTwo}>
                <div>LATEST</div>
                <div>FEATURES</div>
                <div>ARCHIVES</div>
            </div>
            <div className={styles.NavMenuItemThree}>
                <IconThree/>
                <IconFour/>
                <IconFive/>
            </div>
        </div>
    )
}

export default NavMenu;