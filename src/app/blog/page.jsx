import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='blog/testeId' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/33521067/pexels-photo-33521067.jpeg?_gl=1*1m7ki4y*_ga*MjcwMzk2MTIyLjE3NTU5MDI1MTk.*_ga_8JE65Q40S6*czE3NTY0MjE3NjAkbzUkZzEkdDE3NTY0MjI2NjIkajYwJGwwJGgw'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Teste</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See more' url='#' />
        </div>
        </Link>
      <Link href='blog/testeId' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/32437893/pexels-photo-32437893.jpeg?_gl=1*i1r8h2*_ga*MjcwMzk2MTIyLjE3NTU5MDI1MTk.*_ga_8JE65Q40S6*czE3NTY0MjE3NjAkbzUkZzEkdDE3NTY0MjI1MTYkajI3JGwwJGgw'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Teste</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See more' url='#' />
        </div>
        </Link>
      <Link href='blog/testeId' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/32603590/pexels-photo-32603590.jpeg?_gl=1*erazae*_ga*MjcwMzk2MTIyLjE3NTU5MDI1MTk.*_ga_8JE65Q40S6*czE3NTY0MjE3NjAkbzUkZzEkdDE3NTY0MjI0OTQkajQ5JGwwJGgw'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Teste</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See more' url='#' />
        </div>
        </Link>
      <Link href='blog/testeId' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/33189516/pexels-photo-33189516.jpeg?_gl=1*cih3hx*_ga*MjcwMzk2MTIyLjE3NTU5MDI1MTk.*_ga_8JE65Q40S6*czE3NTY0MjE3NjAkbzUkZzEkdDE3NTY0MjI3NzMkajE1JGwwJGgw'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Teste</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See more' url='#' />
        </div>
        </Link>
    </div>
  );
}

export default Blog