import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selectTitle}><h3>Escolha uma galeria</h3></div>
      <div className={styles.items}>
        <Link href='/portfolio/games' className={styles.item}>
          <span className={styles.title}>Jogos</span>
        </Link>
        <Link href='/portfolio/websites' className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className={styles.item}>
          <span className={styles.title}>Aplicativos</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio