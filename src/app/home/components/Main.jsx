import React from 'react';
import Image from 'next/image'

const Main = () => {
  return (
    <div className="flex flex-col items-end justify-start h-[75vh] bg-portfolio-gray">
      <div className="w-4/5 max-w-md lg:max-w-6xl mx-auto flex justify-center h-full">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="w-full lg:w-7/12 flex flex-col justify-center items-left p-4">
            <h1 className="text-3xl lg:text-7xl font-bold mb-4">Hello! I&apos;m<br/>Andy Cazar</h1>
            <p className="text-lg lg:text-xl">
              Passionate about business growth, graphic design, and digital marketing. My goal is to collaborate with you to boost your success and reach new heights.
            </p>
          </div>
          <div className="w-full lg:w-5/12 max-h-full order-1 flex justify-center items-center p-4 overflow-hidden">
            <Image 
              src="/img/banner-portfolio.png" 
              alt="Andy Cazar" 
              layout="responsive" 
              width={500} 
              height={500} 
              objectFit="cover" 
              className='max-h-full object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
