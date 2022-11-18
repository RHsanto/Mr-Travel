import React from "react";
import Navbar from "../../common/Navbar";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="user-profile-section my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 ">
              <div className="card">
                <h3 className="text-center profile-title">User Profile</h3>
                <div className="p-4 card-item">
                  <h5 className="mb-4">Personal Information :</h5>
                  <div className="user-image-item  d-flex justify-content-between ">
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
                <div className="d-flex">
                <div className="w-50">
                  <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>
                  <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>
                  <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>
                  <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>
                  <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>

                  </div>
                  <div className="w-50 ms-3">
                  <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>
                  <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>
                  <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>
                  <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>
                  <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">
                    Your Email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Email :"
                    />
                  </div>

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
