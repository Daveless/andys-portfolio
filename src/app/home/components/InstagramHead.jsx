import React from 'react'
import Image from 'next/image'

const InstagramHead = () => {
  return (
    <div className='bg-white text-black'>
        <div className='w-full max-w-6xl pt-[121px] mx-auto'>
        <div class="w-full mx-auto bg-white shadow-lg rounded-lg mt-10 p-6">
            <div class="flex items-center">
                <div class="w-[150px] mr-[30px] rounded-full overflow-hidden border-2 border-7 border-[#C85DC9] bg-[rgba(217,217,217,0.00)]">
                    <Image
                        src="/img/linkdin-photo.png"
                        alt="Profile Picture"
                        width={292}
                        height={292}
                        className="w-[150px] h-full object-cover "/>
                </div>
                <div class="ml-6">
                    <div class="flex items-center">
                        <h2 class="text-2xl font-light">Andy Cazar</h2>
                        <button class="ml-4 px-4 py-1 border rounded-md font-light text-sm text-[#FFF] bg-[#3473EE]">About</button>
                        <button class="ml-4 px-4 py-1 border rounded-md font-light text-sm text-black bg-[#DDD9D9]">Message</button>
                    </div>
                    <div class="flex mt-2 space-x-6">
                        <div>
                            <span class="font-semibold">9</span> posts
                        </div>
                        <div>
                            <span class="font-semibold">43.7K</span> followers
                        </div>
                        <div>
                            <span class="font-semibold">1400</span> following
                        </div>
                    </div>
                    <div class="mt-4">
                        <p>Growth Partner | Digital Marketing | Graphic Design | Web</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default InstagramHead