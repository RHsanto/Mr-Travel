/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import signIn from '../../images/log-in.png'
import { FaFacebookF } from 'react-icons/fa';

const SignIn = () => {
  return (
    <div className='signIn common-section'>
      <div className="container">
        <div className="row g-5">
         <div className="col-lg-6 mt-5">
          <div className="logIn-form w-75 p-5 mx-auto shadow bg-light d-none d-lg-block">
          <div className="btn-group my-4 d-flex gap-4 justify-content-between px-1 ">
          <button className='w-50 fb-btn'><FaFacebookF className='fb'/> Facebook</button>
          <button className='w-50 google-btn'>Google</button>
          </div>
          <div class="form-floating mb-3">
             <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
             <label for="floatingInput">Username</label>
         </div>
          <div class="form-floating">
             <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
             <label for="floatingPassword">Password</label>
          </div>
           <div className="d-flex justify-content-between mt-3 px-2">
             <p ><input type="checkbox" name="" id="" /> Remember me </p>
             <p className='text-primary'>Forget Password?</p>
           </div>
           <div className="log-btn w-25 mt-2 mx-auto">
             <button>LOGIN</button>
           </div>
        {/* signup link */}
          <p className="text-center mt-4"> Not a member? <Link to='/sign-up'> Signup now</Link></p>
         </div>

           {/* for mobile */}
          <div className="logIn-form  px-4 py-5 mx-auto shadow bg-light d-block d-lg-none">
          <div className="btn-group mb-4 d-flex gap-4 justify-content-between px-1">
          <button className='w-50 fb-btn'>Facebook</button>
          <button className='w-50 google-btn'>Google</button>
          </div>
          <div class="form-floating mb-3">
             <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
             <label for="floatingInput">Username</label>
         </div>
          <div class="form-floating">
             <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
             <label for="floatingPassword">Password</label>
          </div>
          <div className="d-flex justify-content-between mt-3 ">
             <p><input type="checkbox" name="" id="" /> Remember me </p>
             <p className='text-primary'>Forget Password?</p>
           </div>
           <div className="log-btn w-50 mx-auto  mt-4 ">
             <button>LOGIN</button>
           </div>
      {/* signup link */}
      <p className="text-center mt-4"> Not a member? <Link to='/sign-up'> Signup now</Link></p>
         </div>
       
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