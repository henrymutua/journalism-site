import React from 'react'
import NewsBody from '@/components/NewsBody/NewsBody'
import styles from './NewsGrid.module.css'
import newsArticle from '@/data/data'
import { Article } from '@/data/data'

interface NewsGridProps{
    article: Article;
}

const NewsGrid : React.FC<NewsGridProps> = ({ article }) => {
    return(
        <div>
        {newsArticle.map((article) => (<NewsBody key={article.id} article={article}/>))}
        </div>
    )
};

export default NewsGrid;