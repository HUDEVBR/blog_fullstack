'use client'
import React from "react"
import styles from './Loader.module.css'

const Loader = () => {
  return (
      <div className={styles.bar}>
          <div className={styles.ball}></div>
    </div>
  )
}

export default Loader