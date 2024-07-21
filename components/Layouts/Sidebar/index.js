'use client'

import styles from './sidebar.module.css'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/enums'

export const Sidebar = () => {
  const router = useRouter()
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_menu}>
        <ul>
          <li>
            <p onClick={() => router.push(ROUTES.ADMIN_SLIDES)}>スライド管理</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
