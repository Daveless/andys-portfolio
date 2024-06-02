import React from 'react'
import Image from 'next/image'

const InstagramHead = () => {
  return (
    <div className='bg-white text-black'>
        <div className='w-full max-w-6xl pt-1 mx-auto'>
        <div class="w-full mx-auto bg-white shadow-lg rounded-lg mt-10 p-6">
            <div className='flex justify-center items-center gap-8'>
                <div class="w-[150px] rounded-full overflow-hidden border-2 border-7 border-[#C85DC9] bg-[rgba(217,217,217,0.00)]">
                    <Image
                        src="/img/linkdin-photo.png"
                        alt="Profile Picture"
                        width={292}
                        height={292}
                        className="w-[150px] h-full object-cover "/>
                </div>
                <div class="flex justify-between">
                        <div className='justify-center text-center'>
                            <span class="font-bold">9</span> posts
                        </div>
                        <div className='justify-center text-center'>
                            <span class="font-bold">43.7K</span> followers
                        </div>
                        <div className='justify-center text-center'>
                            <span class="font-bold">1400</span> following
                        </div>
                </div>
            </div>
            <div>
                <h2 className='mt-4 font-semibold'>@Andy Cazar</h2>
                <div class="mt-1">
                    <p>Growth Partner | Digital Marketing | Graphic Design | Web</p>
                </div>
            </div>
            <div class="flex mt-3 gap-3 items-center">
                <button class="px-4 font-semibold w-full py-2 border shadow-sm rounded-md text-sm text-[#FFF] bg-[#3473EE]">About</button>
                <button class="px-4 font-semibold w-full py-2 border shadow-sm rounded-md text-sm text-black bg-[#ffffff]">Message</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default InstagramHead