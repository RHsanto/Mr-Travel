/* eslint-disable eqeqeq */
import React from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { BsSaveFill } from "react-icons/bs";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import useFirebase from "../../../hooks/useFirebase";
import useSWR, { useSWRConfig } from "swr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProgressBar } from 'react-loader-spinner';

// useSWR data fetcher
const fetcher = (...args) => fetch(...args).then(res => res.json());

const EditProfile = () => {
  const { mutate } = useSWRConfig();
  const { user } = useFirebase();
  const [loading, setLoading] = useState(false);
  const [userImg, setUserImg] = useState("");
  // const [count, setCount] = useState("");
  const [userInfo, setUserInfo] = useState({ file: [] });

  //here react hook from
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post(`https://mr-travel-server.onrender.com/edit-user/${user.email}`, data).then(res => {
      // here show error msg
      if (!res?.data?.success) {
        toast.error("🦄 Wow so easy!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      // here show success msg
      if (res?.data?.success) {
        toast.success("Edit Profile Successful", {
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
    });
  };

  //  useSwr fetching
  const { data } = useSWR(`https://mr-travel-server.onrender.com/user/${user.email}`, fetcher);

  // here use image upload formula
  const handleImgUpload = event => {
    setUserInfo({
      ...userInfo,
      file: event.target.files[0],
    });

    // setCount(event.target.files?.length);
  };
  // console.log(count);
  // here img upload button
  const submit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", userInfo.file);
    axios
      .post("https://api.imgbb.com/1/upload?key=573a29fff78ba91d05a36baad90b31d9", formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(res => {
        // console.log(res.data);
        const imageLink = res.data?.data?.display_url;
        setUserImg(imageLink);
        axios
          .post("https://mr-travel-server.onrender.com/profile-edit", {
            imageLink: imageLink,
            email: user?.email,
          })

          .then(() => {
            // here use useSWR methods
            mutate(`https://mr-travel-server.onrender.com/user/${user.email}`);
          })
          .catch(err => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
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
          <h5 className="mb-5 fw-bold">Personal Information :</h5>
          <div className="user-image-item mb-5 d-lg-flex d-block justify-content-between ">
            <div className="user-img ">
              <>
                {/* here use loading animation */}
                {!loading ? (
                  <>
                    {userImg || data?.[0]?.imageLink ? (
                      <img src={userImg ? userImg : data?.[0]?.imageLink} alt="img" />
                    ) : (
                      <FaUserCircle className="user-icons" />
                    )}
                  </>
                ) : (
                  //  loading spinner
                  <ProgressBar
                    height="100"
                    width="90"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor="#000"
                    barColor="#0A58CA"
                  />
                )}
              </>
            </div>
            <div className="upload-items mt-5 mt-lg-0 d-lg-flex d-block align-items-center border p-3">
              <div>
                <input onChange={handleImgUpload} type="file" name="upload-img" id="" />
              </div>
              <div>
                <button
                  // disabled={(count == 0 ? "disabled": loading )}
                  onClick={() => submit()}
                  type="submit"
                  className="save-btn "
                >
                  <BsSaveFill /> Upload
                </button>
              </div>
            </div>
          </div>
          {/*edit form */}
          {/*Basic Info  */}
          <form onSubmit={handleSubmit(onSubmit)} className="edit-form">
            <h5 className="mb-5 fw-bold">Basic Info :</h5>
            <div className="d-flex">
              <div className="from-one w-50">
                <div className="mb-4 ">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    First Name
                  </label>
                  <input
                    {...register("FirstName")}
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
                    {...register("NewEmail")}
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
                    {...register("PhoneNumber")}
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
                    {...register("LastName")}
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
                    {...register("Address")}
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
                    {...register("NationalID")}
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
                  <select
                    {...register("Gender")}
                    className="form-select"
                    aria-label="Default select example"
                  >
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
                    {...register("PassportNo")}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput4"
                    placeholder=" Passport Number"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="exampleFormControlInput3" className="form-label">
                    Marital Status
                  </label>
                  <select
                    {...register("MaritalStatus")}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" className="save-btn mt-5">
              {/* success animation */}
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
              {/* error animation */}
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <BsSaveFill /> Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
