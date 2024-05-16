import React from 'react';
import Main from './components/Main';
import InstagramHead from './components/InstagramHead';
import InstagramGrid from './components/InstagramGrid';


const HomePage = () => {
  return (
    <div>
        <Main/>
        <InstagramHead/>
        <InstagramGrid/>
    </div>
  );
};

export default HomePage;