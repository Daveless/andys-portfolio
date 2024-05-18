import React from 'react'
import CategoryIcons from '../../../../public/img/work-categories/CategoryIcons'

const GridNav = ({categories}) => {
  return (
    <ul className='w-3/4 mx-auto max-w-5xl flex justify-around text-black mb-12'>
        <li className='flex justify-between gap-2 items-center uppercase text-xl'>
            <CategoryIcons category='all'/>
            <a href="/">ALL WORK</a>
        </li>
        {categories.map(category => (
            <li className='flex justify-between gap-1 items-center' key={category}>
                <CategoryIcons category={category}/>
                <a className='uppercase text-xl' href="/">{category}</a>
            </li> 
        ))}
    </ul>
  )
}

export default GridNav