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
    <div className='w-full bg-portfolio-gray max-w-6xl mx-auto pb-5 pt-5 flex flex-col justify-center items-center gap-5'>
        <div className='flex gap-10'>
            <div className='border-3 flex border-2 border-[#d1d1d1] rounded-full w-12 h-12 justify-center items-center'><Instagran/></div>
            <div className='border-3 flex border-2 border-[#d1d1d1] rounded-full w-12 h-12 justify-center items-center'><Linkedin/></div>
            <div className='border-3 flex border-2 border-[#d1d1d1] rounded-full w-12 h-12 justify-center items-center'><Whatsapp/></div>
        </div>
        <div className='w-24'>
            <HeaderLogo/>
        </div>
        <hr className="w-5/6 mx-auto max-w-5xl bg-white mb-2"/>
        <div className='flex gap-2 w-full px-2 mx-auto max-w-5xl justify-between items-center'>
            <div className='flex justify-center items-center'>
                <CategoryIcons category='all'/>
                <p className='text-gray-300 text-sm'>ALL WORK</p>
            </div>
            <div className='flex justify-center items-center'>
                <CategoryIcons category='web'/>
                <p className='text-gray-300 text-sm'>DESIGN</p>
            </div>
            <div className='flex justify-center items-center'>
                <CategoryIcons category='design'/>
                <p className='text-gray-300 text-sm'>WEB</p>
            </div>
            <div className='flex justify-center items-center'>
                <CategoryIcons category='marketing'/>
                <p className='text-gray-300 text-sm'>MARKETING</p>
            </div>
        </div>
        <p className='text-gray-300 pt-5'>cazar.andy@gmail.com</p>
    </div>
  )
}

export default Footer