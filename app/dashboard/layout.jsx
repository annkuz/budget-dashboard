import React from 'react'
import Navbar from '@/app/ui/dashboard/navbar/navbar'
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar'
import { Flex, Box, Container, Section } from '@radix-ui/themes'

const Layout = ({children}) => {
  return (
    <Flex >
        <Box flex={"1"} width="100%">
            <Sidebar />
        </Box>
        <Box flex={"4"} width="100%">
            <Navbar />
            {children}
        </Box>
    </Flex>
  )
}

export default Layout