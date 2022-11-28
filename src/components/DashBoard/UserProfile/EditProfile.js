/* eslint-disable eqeqeq */
import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsSaveFill } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import useFirebase from "../../../hooks/useFirebase";
import { useSWRConfig } from "swr";

const EditProfile = () => {
  const { mutate } = useSWRConfig();
  const results = localStorage.getItem("image");
  let parsed;
  if (results != undefined) {
    parsed = JSON.parse(results);
  }
  // console.log(parsed);

  const { user } = useFirebase();
  const [images, setImages] = useState("");
  const [userInfo, setUserInfo] = useState({
    file: [],
  });

  const handleImgUpload = event => {
    setUserInfo({
      ...userInfo,
      file: event.target.files[0],
    });
  };

  const submit = async () => {
    const formData = new FormData();
    formData.append("image", userInfo.file);
    axios
      .post(
        "https://api.imgbb.com/1/upload?expiration=600&key=573a29fff78ba91d05a36baad90b31d9",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(res => {
        const imageLink = res.data?.data?.display_url;
        setImages(imageLink);
        localStorage.setItem("image", JSON.stringify(imageLink));
        axios
          .post("https://mr-travel-server.onrender.com/profile-edit", {
            imageLink: imageLink,
            email: user.email,
          })
          .then(() => {
            // here use useSWR methods
            mutate(`https://mr-travel-server.onrender.com/user/${user.email}`);
          });
      });
    // console.log("Click");
  };

  return (
    <div>
      <div className="card">
        <h4 className="text-center profile-title">
          {" "}
          <FiEdit className="me-2" />
          Edit Profile
        </h4>
        <div className="p-4 p-lg-5 card-item">
          <h5 className="mb-5">Personal Information :</h5>
          <div className="user-image-item mb-5 d-lg-flex d-block justify-content-between ">
            <div className="user-img ">
              <img src={parsed || images} alt="img" />
            </div>
            <div className="upload-items mt-5 mt-lg-0 d-lg-flex d-block align-items-center border p-3">
              <div>
                <input onChange={handleImgUpload} type="file" name="upload-img" id="" />
              </div>
              <div>
                <button onClick={() => submit()} type="submit" className="save-btn ">
                  <BsSaveFill /> Upload
                </button>
              </div>
            </div>
          </div>
          {/*edit form */}
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
                    <option va>Select Gender</option>
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
                    <option value="Single">Select </option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="save-btn mt-5">
              <BsSaveFill /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
