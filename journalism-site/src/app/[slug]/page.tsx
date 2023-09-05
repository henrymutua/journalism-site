"use client"
import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import styles from './News.module.css';
import newsArticle from '@/data/data';
import { usePathname, useSearchParams } from 'next/navigation';


interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

interface Props {
  article: Article | null; // Corrected the type here, it should be Article | null
}

const NewsDetail: React.FC<Props> = ({}) => {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const query = pathName?.split("/")
  const queryParams = query[1];
  console.log(queryParams)
  // const latestArticle = [...newsArticle].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  // const sortedArticle = latestArticle[0];
  const fetchedArticle = newsArticle.filter((article) => article.slug === queryParams)
  const article = fetchedArticle[0]
  console.log(article)
  return (
    <div className={styles.container}>
      {article ? (
        <>
          <h1>{article.title}</h1>
          <Image src={article.imageUrl} 
          alt={article.title}
           width={600}
           height={400} />
           <div>by {article.author}</div>
           <h3>{article.date}</h3>
          <div className={styles.par}><p>{article.content}</p></div>
        </>
      ) : (
        <p>Article not found</p>
      )}
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
//   const { slug } = context.query as { slug: string };


//   // Fetch the data based on the slug
//   const article = newsArticle.find((article) => article.slug === slug);

//   return {
//     props: {
//       article,
//     },
//   };
// };

export default NewsDetail;
