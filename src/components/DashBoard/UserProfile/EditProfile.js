import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsCloudUploadFill, BsSaveFill } from "react-icons/bs";

const EditProfile = () => {
  return (
    <div>
      <div className="card">
        <h4 className="text-center profile-title">
          {" "}
          <FiEdit className="me-2" />
          Edit Profile
        </h4>
        <div className="p-5 card-item">
          <h5 className="mb-4">Personal Information :</h5>
          <div className="user-image-item mb-5 d-flex justify-content-between ">
            <div className="user-img ">
              <img
                src="https://gozayaan.sgp1.digitaloceanspaces.com/media/profile_picture/user_587885df-462a-4ebf-8753-61be1498b64e/re-1.png"
                alt=""
              />
            </div>
            <div className="upload-btn-item">
              <p className="fw-bold">Upload your picture</p>
              <button className="upload-btn">
                <BsCloudUploadFill /> Upload
              </button>
            </div>
          </div>
          {/* form */}
          {/*Basic Info  */}
          <div className="edit-form">
            <h5 className="mb-5 fw-bold">Basic Info :</h5>
            <div className="d-flex">
              <div className="from-one w-50">
                <div className="mb-4 ">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4 ">
                  <label htmlFor="exampleFormControlInput2" className="form-label">
                    Your email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4 ">
                  <label htmlFor="exampleFormControlInput2" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="from-two w-50 ms-4">
                <div className="mb-4 ">
                  <label htmlFor="exampleFormControlInput4" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput4"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-4 ">
                  <label htmlFor="exampleFormControlInput5" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
                <div className="mb-4 ">
                  <label htmlFor="exampleFormControlInput2" className="form-label">
                    National ID
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="National ID"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="exampleFormControlInput3" className="form-label">
                    Gender
                  </label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="from-four w-50 ms-4">
                <div className="mb-4 ">
                  <label htmlFor="exampleFormControlInput4" className="form-label">
                    Passport Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput4"
                    placeholder=" Passport Number"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="exampleFormControlInput3" className="form-label">
                    Marital Status
                  </label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Select </option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="upload-btn mt-5">
              <BsSaveFill /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
