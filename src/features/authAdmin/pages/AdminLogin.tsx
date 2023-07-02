import React from 'react'
import PropTypes from 'prop-types'
import { Image, Stack } from '@chakra-ui/react'
import AdminLoginForm from '../components/AdminLoginForm'

const AdminLogin = () => {
  return (
    <Stack alignItems="center"  mx="auto" minH="100vh"  justifyContent="center" spacing="30px" >
      <Image  w="100px" src="/logo100.png" />
      <AdminLoginForm />

    </Stack>
  )
}


export default AdminLogin