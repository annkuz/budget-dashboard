import React from 'react'
import Navbar from '@/app/ui/dashboard/navbar/navbar'
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar'
import styles from '@/app/ui/dashboard/dashboard.module.css'
import clsx from 'clsx'

const Layout = ({children}) => {
  return (
    <div className={clsx('flex h-screen', styles.container)}>
        <div className={clsx('basis-1/5 p-5', styles.sidebar)}>
            <Sidebar />
        </div>
        <div className={clsx('basis-4/5 p-5', styles.dashboard)}>
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default Layout