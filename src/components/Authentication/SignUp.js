import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import signup from '../../images/sign-up-removebg-preview.png'
import google from '../../images/gmail.png'
const SignUp = () => {
  return (
    <div className='signIn common-section'>
    <div className="container">
      <div className="row g-5">
       <div className="col-lg-6 logIn">
         {/* for window */}
        <div className="logIn-form w-75 p-5 mx-auto shadow bg-light d-none d-lg-block">
        <div className="btn-group mb-5 mt-4 d-flex gap-4 justify-content-between px-1 ">
        <button className='w-50 fb-btn'><FaFacebookF className='fb'/> Facebook</button>
        <button  className='w-50 flex-btn p-0 d-flex justify-content-between'>
          <img src={google} alt="" srcset="" />
          <button className=' google-btn bg-primary w-100'> Google</button></button>
        </div>
        <div class="form-floating mb-3">
           <input type="text" class="form-control" id="floatingInput" placeholder="name"/>
           <label for="floatingInput">Username</label>
           
       </div>
        <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">Email</label>
       </div>
        <div class="form-floating mb-3">
           <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
           <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating">
           <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
           <label for="floatingPassword">Confirm Password</label>
        </div>
         <div className="log-btn w-25 mt-5  mx-auto">
           <button>LOGIN</button>
         </div>
      {/* signup link */}
        <p className="text-center mt-4">I'm already a member?
         <Link to='/sign-in'> Sign in</Link></p>
       </div>

         {/* for mobile */}
        <div className="logIn-form  px-4 py-5 mx-auto shadow bg-light d-block d-lg-none">
        <div className="btn-group mb-5 mt-4 d-flex gap-4 justify-content-between px-1 ">
        <button className='w-50 fb-btn'><FaFacebookF className='fb'/> Facebook</button>
        <button className='w-50 flex-btn p-0 d-flex justify-content-between'>
          <img src={google} alt="" srcset="" />
          <button className=' google-btn bg-primary w-100'> Google</button></button>
        </div>
        <div class="form-floating mb-3">
           <input type="text" class="form-control" id="floatingInput" placeholder="name"/>
           <label for="floatingInput">Username</label>
       </div>
        <div class="form-floating mb-3">
           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">Email</label>
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
        <img src={signup} alt="" className='simg' />
       </div>
      </div>
    </div>
  </div>
  );
};

export default SignUp;