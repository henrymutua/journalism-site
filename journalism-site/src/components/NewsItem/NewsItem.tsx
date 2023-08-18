import React from 'react';
import styles from './NewsItem.module.css';
import newsArticle from '@/data/data';
import { Article } from '@/data/data';


interface NewsItemProps{
    article: Article;
}

const NewsItem: React.FC<NewsItemProps> =({ article }) => {
    return(
       <div className={styles.ItemContainer}>
        <img
            src={article.imageUrl}
            className={styles.NewsItemImage}
            />
            <div className={styles.NewsItemText}>
                <div><h1>{article.title}</h1></div>
                <div><h2> by {article.author}</h2></div>
                
                <div className={styles.paragraphItem}>{article.content.slice(0, 100)}...</div>
                </div>
                </div>


    )
}

export default NewsItem;