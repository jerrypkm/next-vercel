import DarkLayout from '@/components/layouts/DarkLayout'
import { MainLayout } from '@/components/layouts/MainLayout'
import React from 'react'

const About = () => {
  return (
    <>
      <h1>Este el about</h1>
    </>
  )
}

export default About

About.getLayout = function getLayout (page: React.ReactNode) {
  return(    
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}