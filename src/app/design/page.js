'use client'
import React from 'react'
import Main from '../home/components/Main'
import InstagramHead from '../home/components/InstagramHead'
import InstagramGrid from '../home/components/InstagramGrid'

const page = () => {
  return (
    <div>
      <Main/>
      <InstagramHead/>   
      <InstagramGrid category='design'/>
    </div>
  )
}

export default page