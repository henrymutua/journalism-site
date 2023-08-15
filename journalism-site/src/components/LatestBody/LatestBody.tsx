import React from 'react';
import styles from './LatestBody.module.css';
import newsArticle from '@/data/data';
import NewsBody from '../NewsBody/NewsBody';

const LatestBody = () =>{
    const latestArticle = [...newsArticle].sort((a, b) =>  new Date(b.date).getTime() - new Date (a.date).getTime());
    const sortedArticle = latestArticle[0];

    return(
        <div className={styles.LatestBody}>
            <NewsBody article={sortedArticle}/>
        </div>
    )
}
export default LatestBody;