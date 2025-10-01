import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: "HUDEV Contato",
  description: "Esta é a página de contato de um dos meus projetos",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entre em contato</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder='nome' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea className={styles.textArea} placeholder='mensagem' cols={30} rows={10}></textarea>
          <Button url='#' text='Enviar' />
        </div>
      </div>
    </div>
  )
}

export default Contact