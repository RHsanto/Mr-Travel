import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../common/Navbar';
import ModifyBus from '../ModifySearch/ModifyBus';
import { RiArrowLeftRightFill ,RiArrowRightLine} from "react-icons/ri";

const BusSearch = () => {
  const [busData,setBusData]=useState([]);

  useEffect(()=>{
    fetch('./bus.json')
    .then(res=>res.json())
    .then(data=>setBusData(data))
  },[])
  return (
    <div>
      <Navbar/>  {/* here search input */}
    <div className=' all-inputs'>
    <div className=" rounded  pt-5 pb-3 px-4">
      <div className="container">
        <ModifyBus/>
      </div>
     </div>
    </div>
    {/* here result */}
    <div className="common-section ">
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {busData.map(bus=>(
         <div className="flight mt-5">
           <div class="card mb-3 ps-0">
         <div class="row g-0">
           <div class="col-md-4">
             <img src={bus?.img} class="img-fluid  h-100 rounded-start" alt="..."/>
           </div>
           <div class="col-md-8">
             <div class="card-body">
            <div className="d-flex align-items-center justify-content-around mb-5">
              <div>
              <h5 class="card-title">{bus?.from}</h5>
              <h6 class="card-title">{bus?.startDate}</h6>
              </div>
               <h6  className='mx-5 arrow'><RiArrowLeftRightFill/></h6>
               <div>
               <h5 class="card-title">{bus?.to}</h5>
               <h6 class="card-title">{bus?.endDate}</h6>
               </div>
               <div className="time ms-5">
                 <h6>{bus?.totalTime}</h6>
               </div>
            </div>
              
              <div className="d-flex justify-content-between">
              <div className="d-flex">
              <h5 className='ms-1'>BDT {bus?.price}</h5>
               <s className='ms-3 text-secondary'>{bus?.oldPrice}</s>
              </div>
              <div className='select'>
              <button>view sites  <RiArrowRightLine className='ms-4 fs-5'/></button> 
              </div>
              </div>
            </div>

           </div>
         </div>
       </div>
         </div>
        ))}
      </div>
     </div>
    </div>
    </div>
  );
};

export default BusSearch;