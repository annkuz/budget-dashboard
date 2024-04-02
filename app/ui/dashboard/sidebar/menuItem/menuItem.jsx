"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const MenuItem = ({title, path, icon}) => { 
  
  const pathname = usePathname();
  
  return(
    <Link href={path} className={clsx({'flex-row px-2 py-3': true, 'active': pathname === path})}>
      {icon}{title}
    </Link>
  )
}

export default MenuItem