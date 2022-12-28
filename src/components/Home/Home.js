import React from 'react';
import Banner from './Banner/Banner';
import BestOffer from './BestOffer/BestOffer';
import About from './About';
import Reviews from './Reviews/Reviews';
import Popular from './Popular/Popular';
import Add from './Banner/Add';


const Home = () => {
  return (
   <div>
    <Banner/>
    <About/>
    <BestOffer/> 
    <Popular/>
    <Reviews/>
    <Add/>
   </div>
  );
};

export default Home;