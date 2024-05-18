import Image from 'next/image'
import React from 'react'

const WorkCard = ({projectName, projectImage}) => {
  return (
    <a href="https://google.com" className='text-black items-center w-full overflow-hidden h-full'>
        <Image 
            src={`/img/works/${projectImage}`} 
            alt={projectName}
            layout="responsive" 
            width={500} 
            height={500} 
            objectFit="cover" />
    </a>
  )
}

export default WorkCard