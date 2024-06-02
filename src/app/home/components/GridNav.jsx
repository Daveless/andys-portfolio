import React from 'react'
import CategoryIcons from '../../../../public/img/work-categories/CategoryIcons'

const GridNav = ({categories, selectedcategory}) => {
  return (
    
    <ul className='w-[90%] mx-auto max-w-5xl flex justify-around text-black mb-12' id='instaGrid'>
        <li className='flex justify-between items-center uppercase text-sm'>
            <CategoryIcons category='all' isSelected={!selectedcategory?true:false}/>
            <a className={`${!selectedcategory ? 'font-semibold' : ''}`} href="/#instaGrid">ALL WORK</a>
        </li>
        {categories.map(category => (
            <li className='flex justify-between items-center' key={category}>
                <CategoryIcons category={category} isSelected={selectedcategory==category?true:false}/>
                <a className={`uppercase text-sm ${selectedcategory==category?'font-semibold':''}`} href={`/${category}#instaGrid`}>{category}</a>
            </li> 
        ))}
    </ul>
  )
}

export default GridNav