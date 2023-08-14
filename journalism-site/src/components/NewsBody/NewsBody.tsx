import React from 'react';
import styles from './NewsBody.module.css';
import { Article } from '@/data/data';

interface NewsBodyProps {
    article: Article;
  }
  

const NewsBody : React.FC<NewsBodyProps> =({ article }) =>{
    return(
        <div className={styles.NewsBody}>
            <img
            height={100}
            width={200}
            src={article.imageUrl}
            className={styles.NewsImage}
            />
            <div className={styles.NewsText}>
                {article.content.slice(0, 100)}...
            </div>
        </div>
    )
}

export default NewsBody;