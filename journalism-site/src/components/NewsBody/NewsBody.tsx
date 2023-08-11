import React from 'react';
import styles from './NewsBody.module.css';



// Define a TypeScript type for the article prop
interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}
const NewsBody =({article}: {article: Article}) =>{
    return(
        <div className={styles.NewsBody}>
            <img
            src={article.imageUrl}
            className={styles.NewsImage}
            />
            <div className={styles.NewsText}>
                {article.content}.slice(0, 50)
            </div>
        </div>
    )
}

export default NewsBody;