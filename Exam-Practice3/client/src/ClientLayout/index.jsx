import React from 'react'
import Header from '../Layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer'

const ClientLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default ClientLayout