'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader/Loader'
import Image from 'next/image'

const Dashboard = () => {

  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);
  console.log(data)

  if (session.status === 'loading') {
    return <Loader/>
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
      mutate();
    } catch (err) {
      console.log(err)
    }
  }
  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
        {isLoading
          ? 'Loading...'
          : data?.map((post) => (
        <div className={styles.post} key={post._id}>
          <div className={styles.imgContainer}>
                <Image src={post.img} alt='' width={200} height={150}/>
          </div>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <span className={styles.delete} onClick={()=>handleDelete(post._id)}>X</span>
      </div>
      ))}
      </div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Adicionar novas postagens</h1>
      <input type="text" placeholder='Título' className={styles.input} />
      <input type="text" placeholder='Descrição' className={styles.input} />
      <input type="text" placeholder='Insira o link de uma imagem' className={styles.input} />
      <textarea
        placeholder='Insira o conteúdo aqui...'
        className={styles.textArea}
        cols='30'
        rows='10'></textarea>
      <button className={styles.button}>Enviar</button>
      </form>
      </div>
    );
  }
};

export default Dashboard