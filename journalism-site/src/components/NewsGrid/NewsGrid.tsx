import React from 'react'
import NewsItem from '../NewsItem/NewsItem'
import styles from './NewsGrid.module.css'
import newsArticle from '@/data/data'
import { Article } from '@/data/data'

interface NewsGridProps{
    articles: Article[];
}

const NewsGrid : React.FC<NewsGridProps> = ({ articles }) => {
    return(
        
        <div className={styles.NewsGrid}>
         
        {newsArticle.map((article, index) => (
        <div className={styles.NewsGridItem}
            key={article.id}
        //     style={{
        //     // gridRow: `${index + 1} / span 1`, // Each item starts at a row and spans 1 row
        //   }}
          >
          <NewsItem key={article.id} article={article}/>       
          </div>
       ))} 
        </div>
        
    )
};

export default NewsGrid;