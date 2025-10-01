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
          <h1 className={styles.imgTitle}>Transformando Ideias em Tecnologia</h1>
          <h2 className={styles.imgDesc}>Sistemas, aplicativos e soluções digitais sob medida</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Quem Somos?</h1>
          <p className={styles.desc}>
            Apaixonado por tecnologia e inovação, focado no desenvolvimento de
            soluções modernas e eficientes, com experiência em
            desenvolvimento full stack, criando sistemas e aplicativos que
            entregam valor, escalabilidade e performance para nossos clientes.
            <br />
            <br />
            O trabalho vai desde a construção de serviços robustos no
            back-end até a criação de interfaces intuitivas e responsivas no
            front-end. Unindo criatividade e conhecimento técnico, transformamos
            ideias em produtos digitais reais que resolvem problemas do dia a dia.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>O Que Fazemos?</h1>
          <p className={styles.desc}>
            Especializado em desenvolver soluções digitais que se adaptam
            a diferentes necessidades e mercados. Nossa stack inclui tecnologias
            como <strong>TypeScript, Next.js, React, Node.js, PostgreSQL</strong> e
            ferramentas de automação como <strong>n8n</strong> para otimizar fluxos de
            trabalho.
            <br /><br /> - Desenvolvimento de Sistemas Sob Medida
            <br /><br /> - Aplicativos Web e Mobile
            <br /><br /> - Criação e Integração de APIs
            <br /><br /> - Automação de Processos e Dashboards
            <br /><br /> - Soluções Escaláveis e Preparadas para a Nuvem
          </p>

          <br></br>
          <Button url='/contact' text='Contato' />
        </div>
      </div>
    </div>
  )
}

export default About