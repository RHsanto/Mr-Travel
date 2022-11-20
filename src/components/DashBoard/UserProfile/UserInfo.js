/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import useFirebase from "../../../hooks/useFirebase";


const UserInfo = () => {
  const {user}=useFirebase();
  
  return (
    <div className="user-info-section">
      <div className="card">
         <h4 className=" profile-title text-center">Personal Info </h4>
        <div className="card-item p-4 mt-5">
          <div className="all-item ps-3">
            <div className="personal-item ">
              <p>Name </p>
              <p>Email </p>
              <p>Address </p>
              <p>Phone </p>
              <p>Gender </p>
              <p>Marital Status </p>
              <p>National ID </p>   
            </div>

          <div className="personal-item-result fw-bold ms-5 w-75">
             <p className="item-result">{user?.displayName}</p>
              <p className="item-result">{user?.email}</p>
              <p className="item-result">N/A</p>
              <p className="item-result">N/A</p>
              <p className="item-result">N/A</p>
              <p className="item-result">N/A</p>
              <p className="item-result">N/A</p>
            </div>
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
