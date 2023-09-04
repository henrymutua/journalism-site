"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import newsArticle, { Article }  from '../../data/data' 
import Image from 'next/image'; 
import styles from './News.module.css'

const NewsDetailPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string };

  // Find the news article data corresponding to the ID

  
  const article: Article | undefined = newsArticle.find((article) => article.slug === slug);


  if (!article) {
    return <div><p>News article not found</p></div>;
  }

  return (
    <div className={styles.container}>
      <h1>{article.title}</h1>
      <Image src={article.imageUrl} alt={article.title}  /> {/* Adjust width and height as needed */}
      <p>{article.content}</p>
    </div>
  );
};

export default NewsDetailPage;
