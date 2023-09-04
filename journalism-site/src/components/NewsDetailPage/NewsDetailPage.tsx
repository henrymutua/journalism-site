// components/NewsDetailPage.tsx

import React from 'react';
import { Article } from '../../data/data'; // Import your data model
import Image from 'next/image';
import styles from './NewsDetailPage.module.css';

interface NewsDetailPageProps {
  article: Article;
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ article }) => {
  if (!article) {
    return <div><p>News article not found</p></div>;
  }

  return (
    <div className={styles.container}>
      <h1>{article.title}</h1>
      <Image src={article.imageUrl} alt={article.title} /> {/* Adjust width and height as needed */}
      <p>{article.content}</p>
    </div>
  );

};

export default NewsDetailPage;
