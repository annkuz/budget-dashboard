import React from 'react';
import { Container, Heading } from '@radix-ui/themes';
import MenuItem from './menuItem/menuItem'

const menuItems = [{
  title: "Pages",
  list: [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: ''
    },
    {
      title: 'Bank Accounts',
      path: '/dashboard/bank-accounts',
      icon: ''
    },
    {
      title: 'Categories',
      path: '/dashboard/categories',
      icon: ''
    },
    {
      title: 'Transactions',
      path: '/dashboard/transactions',
      icon: ''
    }
  ],
}]

const Sidebar = () => {
  return (
    <Container>{
      menuItems.map(menuCategory => (
        <div key={menuCategory.title} className='flex flex-col'>
          <Heading as='h3' size='1' weight='bold' className='px-2 py-2' color='gray'>{menuCategory.title}</Heading>
          <div className='flex flex-col'>
            {
              menuCategory.list.map(menuItem => <MenuItem key='menuItem.title' {...menuItem}/>)
            }
          </div>
        </div>
      ))
    }</Container>

  )
}

export default Sidebar