import React from 'react';
import './Popular.css'
const Popular = () => {
  return (
    <div className='popular-section'>
      <div className="container">
        <h2 className='text-center'>POPULAR DESTINATION</h2>
        <p className='text-center '>
          Sorem ipsum dolor sit amet, consectetur adipisicing Suscipit 
          votas addf <br />aperiam  Sorem ipsum dolor consectur adipisicing elit.</p>
        <div className="row popular-desh g-4 mx-5">
         <div className="col-lg-6">
           <div className="pop-1">
            <img src="http://themecrazy.net/html/manali/img/destination/1.jpg" alt="" />
           </div>
         </div>
         <div className="col-lg-6">
           <div className="row">
             <div className="col mb-4">
               <div className="pop-2">
                 <img src="http://themecrazy.net/html/manali/img/destination/2.jpg" alt="" />
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col">
               <div className="pop-3">
               <img src="http://themecrazy.net/html/manali/img/destination/3.jpg" alt="" />
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;