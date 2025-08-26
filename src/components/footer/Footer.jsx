import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {

  return (
    <div className={styles.container}>
      <div>©2025 HUDEVBR. Todos os direitos reservados</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="HUDEVBR Github Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="HUDEVBR Linkedin Account" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="HUDEVBR Leetcode Account" />
      </div>
    </div>
  )
}
export default Footer