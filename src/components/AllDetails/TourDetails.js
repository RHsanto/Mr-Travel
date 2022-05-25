import React from 'react';
import {BsGeoAltFill} from "react-icons/bs";

const TourDetails = () => {
  
  return (
    <div>
      { /*accordion 2*/}
  <div class="accordion accordion-flush bg-light border-bottom border-1" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <div class="accordion-button collapsed " type="button"
       data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
        aria-expanded="false" aria-controls="flush-collapseThree">
     <h5 className='re-icons'><BsGeoAltFill/> Location</h5>
      </div>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse"
     aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <p className=' lh-lg'></p>
     </div>
    </div>
  </div>
  </div>
    </div>
  );
};

export default TourDetails;