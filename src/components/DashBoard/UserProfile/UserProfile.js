import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLogout, AiTwotoneSetting } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import useFirebase from "../../../hooks/useFirebase";
import Navbar from "../../common/Navbar";
import EditProfile from "./EditProfile";
import UserInfo from "./UserInfo";

const UserProfile = () => {
  const { logOut,user } = useFirebase();
  const [users,setUsers]=useState([])

  const [userInfo, setUserInfo] = useState(<UserInfo />);
  const handlePersonalInfo = e => {
    setUserInfo(<UserInfo />);
  };
  const handleUserEdit = e => {
    setUserInfo(<EditProfile />);
  };

  // here fetch user data

useEffect(() => {
  const fetchData = async () => {
  const res = await axios.get(`http://localhost:8000/user/${user.email}`);
  setUsers(res.data);
};
fetchData();
}, [user.email]);

// console.log(users[0]?.imageLink);
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
                      src={users[0]?.imageLink}
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
