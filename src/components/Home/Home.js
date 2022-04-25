import React from 'react';
import Add from './Banner/Add';
import Banner from './Banner/Banner';
import BestOffer from './BestOffer/BestOffer';
import About from './About';
import Reviews from './Reviews/Reviews';

const Home = () => {
  return (
   <div>
   <Banner/>
   <Add/>
   <BestOffer/>
   <About/>
   <Reviews/>
   </div>
  );
};

export default Home;