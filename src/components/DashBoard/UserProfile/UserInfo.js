/* eslint-disable jsx-a11y/anchor-has-content */
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import useFirebase from "../../../hooks/useFirebase";

const UserInfo = () => {
  const { user } = useFirebase();
  const[userInfo,setUserInfo]=useState([])

  // here fetch user data
  useEffect(()=>{
   const fetchData = async ()=>{
    const res = await axios.get(`https://mr-travel-server.onrender.com/user/${user.email}`)
    setUserInfo(res.data)
   };
   fetchData();
  },[user.email]) 

  // console.log(userInfo?.[0]);

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
              <p>Passport No </p>
            </div>

            <div className="personal-item-result text-dark ms-5 w-75">
              <p className="item-result">{userInfo?.[0]?.FirstName ? <>{userInfo?.[0]?.FirstName }{userInfo?.[0]?.LastName }
              </>:<>{user?.displayName}</>}</p>
              <p className="item-result">{userInfo?.[0]?.NewEmail ?  userInfo?.[0]?.NewEmail :<>{user?.email}</>}</p>
               <p className="item-result">{userInfo?.[0]?.Address ? userInfo?.[0]?.Address : "N/A"} </p>
              <p className="item-result">{userInfo?.[0]?.PhoneNumber ? userInfo?.[0]?.PhoneNumber : "N/A"} </p>
              <p className="item-result">{userInfo?.[0]?.Gender ? userInfo?.[0]?.Gender : "N/A"} </p>
              <p className="item-result">{userInfo?.[0]?.MaritalStatus ? userInfo?.[0]?.MaritalStatus : "N/A"} </p>
              <p className="item-result">{userInfo?.[0]?.NationalID ? userInfo?.[0]?.NationalID : "N/A"} </p>
              <p className="item-result">{userInfo?.[0]?.PassportNo ? userInfo?.[0]?.PassportNo : "N/A"} </p>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
