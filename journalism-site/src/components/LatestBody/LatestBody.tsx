import React from 'react';
import styles from './LatestBody.module.css';
import newsArticle from '@/data/data';




const LatestBody = () =>{
    const latestArticle = [...newsArticle].sort((a, b) =>  new Date(b.date).getTime() - new Date (a.date).getTime());
    const sortedArticle = latestArticle[0];

    return(
        <div className={styles.LatestBody}>
            <img
            src={sortedArticle.imageUrl}
            className={styles.NewsImage}
            />
            <div className={styles.NewsText}>
                <div><h1>{sortedArticle.title}</h1></div>
                <div><h2>{sortedArticle.author}</h2></div>
                <div><h3>{sortedArticle.date}</h3></div>
                <div className={styles.paragraph}>{sortedArticle.content.slice(0, 500)}...</div>
                </div>
        </div>
    )
}
export default LatestBody;