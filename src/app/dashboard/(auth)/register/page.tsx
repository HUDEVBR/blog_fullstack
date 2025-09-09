'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [error, setError] = useState(false)
  
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });

      res.status === 201 && router.push('/dashboard/login?success=A conta foi criada com sucesso')
    } catch (error) {
      setError(true)
    }

  }
  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='nome de usuário'
        className={styles.input}
        required
      />
      <input
        type="email"
        placeholder='e-mail'
        className={styles.input}
        required
      />
      <input
        type="senha"
        placeholder='senha'
        className={styles.input}
        required
      />
      <button className={styles.button}>Registre-se</button>
      </form>
      {Error && "Algo ocorreu de errado"}
      <Link href='/dashboard/login' className={styles.buttonRegister}>Registrar-se com conta já existente</Link>
    </div>
  )
}

export default Register