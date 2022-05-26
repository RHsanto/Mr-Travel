import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Navbar from '../common/Navbar';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const AddBooking = () => {
     // react hook form
     const { register, handleSubmit ,reset} = useForm();
     const onSubmit = data => {
       console.log(data)
      //  data.types=tour.types
       axios.post(' https://young-cliffs-75372.herokuapp.com/booking',data)
       .then(res =>{
         if(res.data.insertedId){
           toast.success('Booking Successful', {
             position: "top-center",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             });
           reset();
         }
       
       })
     
     };
  return (
    <div>
     <Navbar/>
     <div className="container py-5">
       <div className="row">
         <div className="col-lg-8">
         <h4>Enter Traveler Details </h4>
        {/*  */}
       <form onSubmit={handleSubmit(onSubmit)} className='shadow p-4'>
       <div >
        <h5>Personal Details</h5>
        <div className="d-flex justify-content-between mt-5">
        <div class="form-floating mb-3 w-100 me-lg-3 me-2">
         <input type="text" required {...register("firstName")} 
         class="form-control" id="floatingInput" placeholder="firstName"/>
         <label for="floatingInput">First Name</label>
       </div>
        <div class="form-floating mb-3 w-100">
         <input type="text" required {...register("lastName")}
         class="form-control" id="floatingInput" placeholder="lastName"/>
         <label for="floatingInput">Last Name</label>
       </div>
        </div>
        <div className="d-flex justify-content-between ">
        <div class="form-floating mb-3 w-100 me-lg-3 me-2">
         <input type="email" required {...register("email")}
         class="form-control" id="floatingInput" placeholder="Email"/>
         <label for="floatingInput">Email</label>
       </div>
        <div class="form-floating mb-3 w-100">
         <input type="tel" required {...register("PhoneNumber")}
         class="form-control" id="phone" placeholder="Number"/>
         <label for="floatingInput">Phone Number</label>
       </div>
       
        </div>
      
      </div>
       <div className='ms-1 mt-3 '>
         <button type='submit'  className='confirm w-100'>Confirm Booking</button>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        
        </div>
       </form>   
         </div>
       </div>
     </div>
    </div>
  );
};

export default AddBooking;