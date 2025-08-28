import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Teste</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=''
            src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/10-Indie-Games-With-The-Best-Looking-Pixel-Art.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5'
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Teste</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=''
            src='https://www.loubagel.com/blog/beautiful-pixel-art-games/img/three-beautiful-pixel-art-games-1400x700.jpg'
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Teste</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=''
            src='https://invogames.s3.us-east-2.amazonaws.com/Pixel_Art_Bannar_1_6ea024d4a2_ab9355db06.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Category