import React from 'react';
// import Add1 from '../../../images/add1.png'
// import Add2 from '../../../images/add2.png'
// import Add3 from '../../../images/add3.png'
// import Add4 from '../../../images/add4.png'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Add = () => {
  return (
    <div className='testi'>
     <div className="container">
       <div className="row d-block d-md-flex align-items-center mx-5 mx-md-0">
        <div className="col-lg-4">
        <div className="testi-item">
          <div className="testi-avatar  ">
           <img src="https://townhub.kwst.net/images/avatar/3.jpg" alt="" />
          </div>
          <div className="ratings d-flex justify-content-center">
              <li><FaStar/></li>
              <li><FaStar/></li>
              <li><FaStar/></li>
              <li><FaStar/></li>
              <li><FaStarHalfAlt/></li>
             </div> 
          <div className="testi-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime amet mollitia nulla, fugit eum magni? Esse, culpa ex. Animi, ut quod! Unde vel repudiandae esse velit architecto quos quaerat!</p>
             <h5>Husaain jaif</h5>
             <small>Web Developer</small>
          </div>
        </div>
        </div>
       </div>
     </div>
    </div>
  );
};

export default Add;