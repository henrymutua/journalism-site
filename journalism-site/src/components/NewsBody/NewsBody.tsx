import React from 'react';
import styles from './NewsBody.module.css';
import { Article } from '@/data/data';
import Image from 'next/image';

interface NewsBodyProps {
    article: Article;
  }
  

const NewsBody : React.FC<NewsBodyProps> =({ article }) =>{
    return(
        <div className={styles.NewsBody}>
            <img
            src={article.imageUrl}
            className={styles.NewsImage}
            alt='news'
            />
            <div className={styles.NewsText}>
                <div><h1>{article.title}</h1></div>
                <div><h2>{article.author}</h2></div>
                <div><h3>{article.date}</h3></div>
                <div className={styles.paragraph}>{article.content.slice(0, 500)}...</div>
            </div>
        </div>
    )
}

export default NewsBody;