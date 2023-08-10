import Image from 'next/image'
import styles from './page.module.css'
import { Inter } from 'next/font/google'
import NavMenu from '@/components/NavMenu/NavMenu'
import NewsBody from '@/components/NewsBody/NewsBody'
import LatestBody from '@/components/LatestBody/LatestBody'
import Footer from '@/components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.main}>
      <NavMenu/>
      <NewsBody/>
      <LatestBody/>
      <Footer/>
    </div>
  )
}
