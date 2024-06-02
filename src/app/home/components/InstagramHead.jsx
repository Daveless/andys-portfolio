import React from 'react'
import Image from 'next/image'

const InstagramHead = () => {
  return (
    <div className='bg-white text-black'>
        <div className='w-full max-w-6xl mx-auto'>
        <div class="w-full mx-auto bg-white shadow-lg rounded-lg pt-5 p-6">
            <div className='grid grid-cols-[30%_60%] items-center justify-center gap-[10%]'>
                <div class="flex justify-center items-center p-[3px] w-full h-full rounded-full instagram">
                    <div class="rounded-full w-full overflow-hidden border-4 border-white">
                        <Image
                        src="/img/linkdin-photo.png"
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className="w-full max-w-none object-fill "/>
                    </div>
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