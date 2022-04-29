import React from 'react';
import Banner from './Banner/Banner';
import BestOffer from './BestOffer/BestOffer';
import About from './About';
import Reviews from './Reviews/Reviews';

const Home = () => {
  return (
   <div>
   <Banner/>
   <About/>
   <BestOffer/> 
    <Reviews/>
   </div>
  );
};

export default Home;