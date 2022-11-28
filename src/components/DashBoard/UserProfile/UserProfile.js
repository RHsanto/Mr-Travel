
import React, {  useState } from "react";
import { AiOutlineLogout, AiTwotoneSetting } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import useFirebase from "../../../hooks/useFirebase";
import Navbar from "../../common/Navbar";
import EditProfile from "./EditProfile";
import UserInfo from "./UserInfo";
import useSWR from 'swr'

//  use useSwr fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json())

const UserProfile = () => {
  const { logOut,user } = useFirebase();
  const [userInfo, setUserInfo] = useState(<UserInfo />);
  
  // here use useSwr methods
  const { data, error } = useSWR(`https://mr-travel-server.onrender.com/user/${user.email}`, fetcher)


  const handlePersonalInfo = () => {
    setUserInfo(<UserInfo />);
  };
  const handleUserEdit = () => {
    setUserInfo(<EditProfile />);
  };


if (error) return <div>failed to load</div>
if (!data) return <div>loading...</div>
// console.log(data);
  return (
    <div>
      <Navbar />
      <div className="user-profile-section  ">
        <div className="container">
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-lg-3">
              <div className="card">
                <div className="profile-info py-4">
                  <div className="user-img-two  d-flex justify-content-center">
                    <img
                      src={ data[0]?.imageLink}
                      alt="img"
                    /> 
                   
                  </div>
                  <hr />
                  <div className="edit-item mt-3">
                    <li onClick={handlePersonalInfo} className=" dropdown-item">
                      <FaUserAlt className="me-2" />

                      <span>Personal Info</span>
                    </li>

                    <li onClick={handleUserEdit} className=" dropdown-item">
                      <AiTwotoneSetting className="me-2" />
                      <span>Edit Profile</span>
                    </li>

                    <li onClick={logOut} className=" dropdown-item">
                      <AiOutlineLogout className="me-2" />
                      <span>Log Out</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 ">{userInfo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
