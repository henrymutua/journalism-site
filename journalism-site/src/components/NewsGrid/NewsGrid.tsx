import React from 'react'
import NewsItem from '../NewsItem/NewsItem'
import styles from './NewsGrid.module.css'
import newsArticle from '@/data/data'
import { Article } from '@/data/data'
import Link from 'next/link'

interface NewsGridProps{
    articles: Article[];
}

const NewsGrid : React.FC<NewsGridProps> = ({ articles }) => {
    return(
        
        <div className={styles.NewsGrid}>
         
        {articles.map((article) => (
            
        <div className={styles.NewsGridItem}
            key={article.id}
        //     style={{
        //     // gridRow: `${index + 1} / span 1`, // Each item starts at a row and spans 1 row
        //   }}
          >
            <Link href="/[slug]" as={`/${article.slug}`}>
          <NewsItem key={article.id} article={article}/>
          </Link>       
          </div>
          
       ))} 
       
        </div>
        
    )
};

export default NewsGrid;