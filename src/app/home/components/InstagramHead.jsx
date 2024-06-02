import React from 'react'
import Image from 'next/image'

const InstagramHead = () => {
  return (
    <div className='bg-white text-black'>
        <div className='w-full max-w-2xl lg:max-w-6xl mx-auto'>
        <div class="w-full mx-auto bg-white shadow-lg-lr lg:shadow-none pt-5 lg:py-20 p-6">
            <div className='grid lg:grid-cols-[30%_62%] grid-cols-[32%_62%] items-center justify-center gap-[6%]'>
                <div class="flex justify-center items-center p-[3px] lg:p-[5px] w-full h-full rounded-full instagram mx-auto max-w-40 lg:max-w-52">
                    <div class="rounded-full w-full overflow-hidden border-4 border-white">
                        <Image
                        src="/img/linkdin-photo.png"
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className="w-full max-w-none object-fill "/>
                    </div>
                </div>
                <div class="lg:max-w-xl lg:flex lg:flex-col lg:gap-7">
                    <div className='justify-around items-center hidden lg:grid lg:grid-cols-[25%_55%_10%] lg:gap-[5%]'>
                        <h3 className='lg:text-2xl'>Andy Cazar</h3>
                        <div class="flex gap-6 justify-center items-center w-full">
                            <button class="px-8 lg:text-xl lg:font-normal font-semibold py-2 border shadow-sm rounded-md text-sm text-[#FFF] bg-[#3473EE]">About</button>
                            <button class="px-8 lg:text-xl lg:font-normal font-semibold py-2 border shadow-sm rounded-md text-sm text-black bg-[#ffffff]">Message</button>
                        </div>
                        <div class="flex items-center justify-center space-x-2">
                            <div class="w-2 h-2 bg-gray-700 rounded-full"></div>
                            <div class="w-2 h-2 bg-gray-700 rounded-full"></div>
                            <div class="w-2 h-2 bg-gray-700 rounded-full"></div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-xl justify-center text-center flex flex-col lg:flex-row lg:gap-2'>
                            <span className='font-bold'>9</span>
                            <span>posts</span>
                        </div>
                        <div className='text-xl justify-center text-center flex flex-col lg:flex-row lg:gap-2'>
                            <span className='font-bold'>43.7K</span>
                            <span>followers</span>
                        </div>
                        <div className='text-xl justify-center text-center flex flex-col lg:flex-row lg:gap-2'>
                            <span className='font-bold'>1400</span>
                            <span>following</span>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'>Growth Partner | Digital Marketing | Graphic Design | Web</p>
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <h2 className='mt-4 font-semibold'>@Andy Cazar</h2>
                <div class="mt-1">
                    <p>Growth Partner | Digital Marketing | Graphic Design | Web</p>
                </div>
            </div>
            <div class="flex mt-3 gap-3 items-center lg:hidden">
                <button class="px-4 font-semibold w-full py-2 border shadow-sm rounded-md text-sm text-[#FFF] bg-[#3473EE]">About</button>
                <button class="px-4 font-semibold w-full py-2 border shadow-sm rounded-md text-sm text-black bg-[#ffffff]">Message</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default InstagramHead