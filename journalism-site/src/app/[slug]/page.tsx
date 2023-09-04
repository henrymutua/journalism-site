"use client";

import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image'; 
import styles from './News.module.css'
import NewsDetailPage from '@/components/NewsDetailPage/NewsDetailPage';

interface Article{
  id: number;
  title: string;
  slug: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of news articles and get their slugs
  const res = await fetch('https://.../posts'); // Replace with your actual API endpoint
  const newsArticles: Article[] = await res.json();

  const paths = newsArticles.map((article) => ({
    params: { slug: article.slug }, // Use the slug as the parameter
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  // Fetch the news article data based on the slug
  const res = await fetch(`https://.../posts/${slug}`); // Replace with your actual API endpoint
  const article: Article = await res.json();

  return {
    props: {
      article,
    },
  };
};


const NewsDetail: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className={styles.container}>

  <NewsDetailPage article={article}/>


  </div>

  );// Access the article property
;
}



export default NewsDetail;

