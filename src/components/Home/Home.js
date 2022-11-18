import React from 'react';
import Banner from './Banner/Banner';
import BestOffer from './BestOffer/BestOffer';
import About from './About';
import Reviews from './Reviews/Reviews';
import Popular from './Popular/Popular';


const Home = () => {
  return (
   <div>
    <Banner/>
    <About/>
    <BestOffer/> 
    <Popular/>
    <Reviews/>
 
   </div>
  );
};

export default Home;