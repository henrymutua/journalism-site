import React from 'react';
import styles from './LatestBody.module.css'
import newsArticle from '@/data/data';
import Link from 'next/link'

const LatestBody = () => {
    const latestArticle = [...newsArticle].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const sortedArticle = latestArticle[0];

    return (
        <>
            <Link href={`/${sortedArticle.slug}`}>
                <div className={styles.LatestBody}>
                <div className={styles.bodyTitle}>
                    Latest
                </div>
                    <img
                        src={sortedArticle.imageUrl}
                        className={styles.NewsImage}
                    />
                    <div className={styles.NewsText}>
                        <div><h1>{sortedArticle.title}</h1></div>
                        <div>by {sortedArticle.author}</div>
                        <div><h3>{sortedArticle.date}</h3></div>
                        <div className={styles.paragraph}>{sortedArticle.content.slice(0, 500)}...</div>
                    </div>

                </div>
            </Link>
            </>
    )
}
export default LatestBody;