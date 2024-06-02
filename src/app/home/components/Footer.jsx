import React from 'react'
import Instagran from '../../../../public/img/media-icons/Instagran'
import Linkedin from '../../../../public/img/media-icons/Linkedin'
import Whatsapp from '../../../../public/img/media-icons/Whatsapp'
import HeaderLogo from './HeaderLogo'
import CategoryIcons from '../../../../public/img/work-categories/CategoryIcons'

const Footer = () => {
    const media = [
        {
            web: 'instagram',
            url: 'http://instagram.com/andy',
            icon: '/insta'
        }
    ]
  return ( 
    <div className='w-full bg-portfolio-gray pb-5 pt-5 flex flex-col justify-center items-center gap-5 max-w-2xl lg:max-w-6xl mx-auto'>
        <div className='flex gap-10 lg:w-5/6 lg:mx-auto lg:max-w-5xl '>
            <a target='_blank' href='https://www.instagram.com/andyandhunt/' className='border-3 flex border-2 border-[#d1d1d1] rounded-full w-12 h-12 justify-center items-center'><Instagran/></a>
            <a target='_blank' href='https://www.linkedin.com/in/andr%C3%A9s-cazar-a381a71a9/' className='border-3 flex border-2 border-[#d1d1d1] rounded-full w-12 h-12 justify-center items-center'><Linkedin/></a>
            <a target='_blank' href='https://walink.co/f6b78d' className='border-3 flex border-2 border-[#d1d1d1] rounded-full w-12 h-12 justify-center items-center'><Whatsapp/></a>
        </div>
        <div className='w-24'>
            <HeaderLogo/> 
        </div>
        <hr className="w-5/6 mx-auto max-w-5xl bg-white lg:mt-4 mb-2"/>
        <div className='flex gap-2 w-full lg:max-w-2xl px-2 mx-auto max-w-5xl justify-between items-center'>
            <a href='/' className='flex justify-center items-center'> 
                <CategoryIcons category='all'/>
                <p className='text-gray-300 text-sm lg:text-xl'>ALL WORK</p>
            </a>
            <a href='/design' className='flex justify-center items-center'>
                <CategoryIcons category='web'/>
                <p className='text-gray-300 text-sm lg:text-xl'>DESIGN</p>
            </a>
            <a href='/web' className='flex justify-center items-center'>
                <CategoryIcons category='design'/>
                <p className='text-gray-300 text-sm lg:text-xl'>WEB</p>
            </a>
            <a href='/marketing' className='flex justify-center items-center'>
                <CategoryIcons category='marketing'/>
                <p className='text-gray-300 text-sm lg:text-xl'>MARKETING</p>
            </a>
        </div>
        <p className='text-gray-400 pt-5 lg:text-2xl'>cazar.andy@gmail.com</p>
    </div>
  )
}

export default Footer