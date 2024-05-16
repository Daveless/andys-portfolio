import React from 'react'
import HeaderLogo from './HeaderLogo'

const Header = () => {
  return (
    <div className='h-[25vh] flex justify-center items-center bg-portfolio-gray pt-16'>
      <HeaderLogo/>
    </div>
  )
}

export default Header