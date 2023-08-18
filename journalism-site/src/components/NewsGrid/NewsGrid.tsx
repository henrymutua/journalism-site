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
        <div className={styles.NewsGridItem}>
        {newsArticle.map((article) => (<NewsItem key={article.id} article={article}/>))}</div>
        </div>
    )
};

export default NewsGrid;