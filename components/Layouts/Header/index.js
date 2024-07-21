'use client'

import styles from './header.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export const Header = () => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title} onClick={() => router.push('/')}>
        SlideStream
      </h1>
      <Image
        className={styles.header_logo}
        src='/img/Asakusa.png'
        alt='Asakusa'
        width={191}
        height={25}
      />
    </header>
  )
}
