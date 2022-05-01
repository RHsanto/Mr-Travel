import React from 'react';
import './Popular.css'
const Popular = () => {
  return (
    <div className='popular-section'>
      <div className="container">
        <h1 className='text-center title fw-bold pb-3'>POPULAR DESTINATION</h1>
        <p className='text-center '>
          Sorem ipsum dolor sit amet, consectetur adipisicing Suscipit 
          votas addf <br />aperiam  Sorem ipsum dolor consectur adipisicing elit.</p>
        <div className="row popular-desh g-4 mx-0 mx-lg-5">
         <div className="col-lg-6">
           <div className="pop-1">
            <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80" alt="" />
            <div className="pop-info">
            <h2>Istanbul</h2>
           <h5>80+ Tour</h5>
           </div>
           </div>
         </div>
         <div className="col-lg-6">
           <div className="row">
             <div className="col mb-4">
               <div className="pop-2">
                 <img src="https://images.unsplash.com/photo-1644398182725-2074250fb5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                 <div className="pop-info">
                    <h2>Cox Bazaar</h2>
                    <h5>100+ Tour</h5>
                </div>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col">
               <div className="pop-2">
               <img src="https://images.unsplash.com/photo-1611563780943-76813488c06f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
               <div className="pop-info">
                    <h2>Saint Martin</h2>
                    <h5>100+ Tour</h5>
                </div>
               </div>
             </div>
           </div>
         </div>
         <div className="col-lg-6">
           <div className="row">
             <div className="col mb-4">
               <div className="pop-2">
                 <img src="https://images.unsplash.com/photo-1643996729194-682a79f4feff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80" alt="" />
                 <div className="pop-info">
                    <h2>Sajek valley</h2>
                    <h5>80+ Tour</h5>
                </div>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col">
               <div className="pop-2">
               <img src="https://images.unsplash.com/photo-1581879705211-78784fcc1a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="" />
               <div className="pop-info">
                    <h2>Ladakh, India</h2>
                    <h5>70+ Tour</h5>
                </div>
               </div>
             </div>
           </div>
         </div>
         <div className="col-lg-6">
           <div className="pop-1">
            <img src="https://images.unsplash.com/photo-1530423316264-2b8b006f7d63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2096&q=80" alt="" />
            <div className="pop-info">
            <h2>Singapore</h2>
           <h5>50+ Tour</h5>
           </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;