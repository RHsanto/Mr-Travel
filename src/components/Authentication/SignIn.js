/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Gnail from '../../images/gmail.png'
const SignIn = () => {
  return (
    <div className='signIn'>
      <div className="container">
        <div className="row">
        <h1 className='text-center mt-5'>Login with your Gmail Account</h1>
          <div className="text-center my-5">
           <button className='rounded'> <img src={Gnail}alt="" /> continue with google account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;