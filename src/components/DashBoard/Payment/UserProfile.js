import React from "react";
import { AiOutlineLogout, AiTwotoneSetting } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../common/Navbar";

const UserProfile = () => {
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
                      src="https://gozayaan.sgp1.digitaloceanspaces.com/media/profile_picture/user_587885df-462a-4ebf-8753-61be1498b64e/re-1.png"
                      alt=""
                    />
                  </div>
                  <hr />
                  <div className="edit-item mt-3">
                    <li>
                      {" "}
                      <Link to="/#" className=" dropdown-item">
                        <FaUserAlt className="me-2" /> <span>Personal Info</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/#" className=" dropdown-item">
                        <AiTwotoneSetting className="me-2" />
                        <span>Edit Profile</span>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/#" className=" dropdown-item">
                        <AiOutlineLogout className="me-2" />
                        <span>Log Out</span>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 ">
              <div className="card">
                <h3 className="text-center profile-title">User Profile</h3>
                <div className="p-4 card-item">
                  <h5 className="mb-4">Personal Information :</h5>
                  <div className="user-image-item mb-5 d-flex justify-content-between ">
                    <div className="user-img ">
                      <img
                        src="https://gozayaan.sgp1.digitaloceanspaces.com/media/profile_picture/user_587885df-462a-4ebf-8753-61be1498b64e/re-1.png"
                        alt=""
                      />
                    </div>
                    <div className="upload-btn-item">
                      <p>Upload your picture</p>
                      <button className="upload-btn">Upload</button>
                      <button className="remove-btn ">Remove</button>
                    </div>
                  </div>
                  {/* form */}
                  {/*Basic Info  */}
                  <div className="edit-form">
                    <h5 className="mb-5 fw-bold">Basic Info :</h5>
                    <div className="d-flex">
                      <div className="from-one w-50">
                        <div class="mb-4 ">
                          <label for="exampleFormControlInput1" class="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="First Name"
                          />
                        </div>
                        <div class="mb-4 ">
                          <label for="exampleFormControlInput2" class="form-label">
                            Your email
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Your Email"
                          />
                        </div>
                        <div class="mb-4 ">
                          <label for="exampleFormControlInput2" class="form-label">
                            Phone
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="from-two w-50 ms-4">
                        <div class="mb-4 ">
                          <label for="exampleFormControlInput4" class="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput4"
                            placeholder="Last Name"
                          />
                        </div>
                        <div class="mb-4 ">
                          <label for="exampleFormControlInput5" class="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput5"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                    </div>
                    {/* others info */}
                    <h5 className="my-5 fw-bold">Others Info :</h5>
                    <div className="d-flex">
                      <div className="from-three w-50">
                        <div class="mb-4 ">
                          <label for="exampleFormControlInput2" class="form-label">
                            National ID
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Your Email :"
                          />
                        </div>
                        <div className="mb-4">
                          <label for="exampleFormControlInput3" class="form-label">
                            Gender
                          </label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="from-four w-50 ms-4">
                        <div class="mb-4 ">
                          <label for="exampleFormControlInput4" class="form-label">
                            Passport Number
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput4"
                            placeholder="Your Email :"
                          />
                        </div>

                        <div className="mb-4">
                          <label for="exampleFormControlInput3" class="form-label">
                            Marital Status
                          </label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Select </option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="btn-group mt-5">
                      <button className="remove-btn me-3">Close</button>
                      <button className="upload-btn">Save</button>
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
