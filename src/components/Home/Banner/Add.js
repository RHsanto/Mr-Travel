import React from 'react';
import Add1 from '../../../images/add1.png'
import Add2 from '../../../images/add2.png'
import Add3 from '../../../images/add3.png'
import Add4 from '../../../images/add4.png'
const Add = () => {
  return (
    <div className='adds'>
     <div className="container">
       <div className="row d-block d-md-flex align-items-center mx-5 mx-md-0">
         <div className="col-3">
           <img src={Add1} alt="" />
         </div>
         <div className="col-3">
           <img src={Add2} alt="" />
         </div>
         <div className="col-3">
           <img src={Add3} alt="" />
         </div>
         <div className="col-3">
           <img src={Add4} alt="" />
         </div>
       </div>
     </div>
    </div>
  );
};

export default Add;