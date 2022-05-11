/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import signIn from '../../images/sign-in.png'
const SignIn = () => {
  return (
    <div className='signIn common-section'>
      <div className="container">
        <div className="row ">
         <div className="col-lg-6">
          
         </div>
         <div className="col-lg-6">
          <img src={signIn} alt="" className='simg' />
         </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;