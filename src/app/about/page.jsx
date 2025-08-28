import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/16592498/pexels-photo-16592498.jpeg?_gl=1*j18v24*_ga*MjcwMzk2MTIyLjE3NTU5MDI1MTk.*_ga_8JE65Q40S6*czE3NTYxNjk2OTAkbzMkZzEkdDE3NTYxNjk5MTIkajU5JGwwJGgw"
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}> Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Minus nihil ratione ipsum non ut laborum, corporis
            mollitia asperiores excepturi soluta quaerat enim
            accusamus explicabo autem numquam! Corporis
            repellat neque deleniti? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Distinctio, eaque, voluptatibus Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Possimus
            perspiciatis voluptatem excepturi vero vitae, exercitationem eius
            explicabo voluptas nisi mollitia. Modi veritatis consequatur enim
            at dolorem deserunt sint sed saepe!
            <br />
            <br />
            impedit quia fuga aperiam alias nihil ratione, nemo
            doloremque nostrum? Esse placeat ipsum deserunt
            at ex ipsam quo reiciendis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quasi voluptates dignissimos
            similique optio quam totam qui dolores tempore aperiam,
            assumenda aliquid natus nam cum reprehenderit
            asperiores doloribus laudantium libero molestias?</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dicta sunt saepe assumenda harum, in maxime, id iste
                molestias hic quam ipsam ad veritatis omnis laborum,
                est laudantium. Iusto, a soluta! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eius doloremque
                maxime nemo laudantium, doloribus corrupti voluptate
                itaque quis, molestias dolor voluptatem numquam eos
            facilis amet sed. Odit velit quos assumenda.
            <br /><br /> - Creative Illustrations
            <br /><br /> - Dynamic Websites
            <br /><br /> - Fast and Handy Mobile Apps
            </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  )
}

export default About