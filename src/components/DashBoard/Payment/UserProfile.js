import React from 'react';
import Navbar from '../../common/Navbar';

const UserProfile = () => {
  return (
    <div>
      <Navbar/>
     <div className="user-profile-section my-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 ">
            <div className="card">
              <h3 className='text-center profile-title'>User Profile</h3>
             <div className="p-4 card-item">
             <h5 className='mb-4'>Personal Information :</h5>
              <div className="user-image-item">
                <div className="user-img">
                  <img  src="https://gozayaan.sgp1.digitaloceanspaces.com/media/profile_picture/user_587885df-462a-4ebf-8753-61be1498b64e/re-1.png" alt="" />
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default UserProfile;