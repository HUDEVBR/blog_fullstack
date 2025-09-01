import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation';

async function getData(slug) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.slug)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            eveniet voluptate minus aperiam cumque, et veniam quisquam
            laboriosam, nam officiis perspiciatis a rerum obcaecati qui quaerat,
            tempore dolore quo quae. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Deleniti quod ab quidem totam, odio quibusdam reiciendis.
            Ut blanditiis tempora possimus, exercitationem facere eos deserunt!
            Eum iusto quaerat architecto tempora amet. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nemo magni, fugiat est
            perferendis, ex adipisci aperiam accusantium dignissimos rerum
            odit ipsam sunt sequi! Similique consectetur non voluptate, ipsa vero vel!
          </p>
          <div className={styles.author}>
            <Image
              src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/33521067/pexels-photo-33521067.jpeg?_gl=1*1m7ki4y*_ga*MjcwMzk2MTIyLjE3NTU5MDI1MTk.*_ga_8JE65Q40S6*czE3NTY0MjE3NjAkbzUkZzEkdDE3NTY0MjI2NjIkajYwJGwwJGgw'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quibusdam delectus recusandae iste odit nobis fugiat
          commodi? Nihil, at, doloremque unde obcaecati voluptas,
          tenetur consectetur asperiores nam beatae repellat optio
          libero. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam voluptate sunt ut autem
          debitis ea hic omnis porro sit eligendi animi, pariatur quis
          dignissimos repellendus similique cum, enim eveniet
          aspernatur? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Dicta sequi ex consectetur amet incidunt
          nostrum, iusto doloremque dolor esse tempore inventore
          aspernatur accusamus debitis blanditiis corporis aperiam
          at atque sit.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati impedit consequatur quos cumque nobis iste odit
          neque ea iure asperiores sed eos ratione, pariatur sapiente
          reprehenderit voluptas error exercitationem dolores.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error odit
          doloremque deleniti accusantium aperiam fugiat dicta iste. Necessitatibus
          eum aspernatur voluptates quia odio reprehenderit dignissimos deserunt?
          Consequuntur, voluptatibus obcaecati? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Necessitatibus ad fugit nesciunt dignissimos
          deserunt, at ea expedita sed quod optio est? Commodi nobis debitis cum
          dignissimos, optio enim itaque aspernatur.
        </p>
      </div>
    </div>
  )
}

export default BlogPost