import React from "react";
import styles from './CloseIcon.module.css'

interface CloseIconProps {
    onClick: () => void;
}

const CloseIcon: React.FC<CloseIconProps> = ( {onClick}) =>{
    return(
        <div className={styles.CloseIcon} onClick={onClick}>
            <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" />
<path d="M7 17L16.8995 7.10051" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7.00001L16.8995 16.8995" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
    )
}
export default CloseIcon;