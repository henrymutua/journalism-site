'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { Inter } from 'next/font/google'
import NavMenu from '@/components/NavMenu/NavMenu'
import NewsGrid from'@/components/NewsGrid/NewsGrid'
import Footer from '@/components/Footer/Footer'
import newsArticle from '@/data/data'
import Title from '@/components/Title/Title'
import Header from '@/components/Header/Header'
import LatestBody from '@/components/LatestBody/LatestBody';




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   // Initialize the router
  
  return (
    <div className={styles.main}>
      <Header/>
      <NavMenu/>
      <LatestBody/>
      <Title/>
      <NewsGrid articles={newsArticle} />
      <Footer/>
    </div>
  )
};
