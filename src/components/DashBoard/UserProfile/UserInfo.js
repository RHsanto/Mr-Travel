import React from "react";
import useFirebase from "../../../hooks/useFirebase";

const UserInfo = () => {
  const {user}=useFirebase();
  return (
    <div className="user-info-section">
      <div className="card">
        <div className="card-item p-4">
          <h5 className="mb-5">Personal Info</h5>
          <div className="all-item ps-3">
            <div className="mb-4 personal-item d-flex  border-bottom border-1 ">
              <p className="text-secondary">Name </p>
              <p className="ms-5 fw-bold">{user?.displayName}</p>
            </div>
            <div className="mb-4 personal-item d-flex  border-bottom border-1 ">
              <p className="text-secondary">Email </p>
              <p className="ms-5 fw-bold">{user?.email}</p>
            </div>
            <div className="mb-4 personal-item d-flex  border-bottom border-1 ">
              <p className="text-secondary">Address </p>
              <p className="ms-5 fw-bold">N/A</p>
            </div>
            <div className="mb-4 personal-item d-flex  border-bottom border-1 ">
              <p className="text-secondary">Phone </p>
              <p className="ms-5 fw-bold">N/A</p>
            </div>
            <div className="mb-4 personal-item d-flex  border-bottom border-1 ">
              <p className="text-secondary">Gender </p>
              <p className="ms-5 fw-bold">N/A</p>
            </div>
            <div className="mb-4 personal-item d-flex  border-bottom border-1 ">
              <p className="text-secondary">Marital Status </p>
              <p className="ms-5 fw-bold">N/A</p>
            </div>
            <div className="mb-4 personal-item d-flex  border-bottom border-1 ">
              <p className="text-secondary">National ID </p>
              <p className="ms-5 fw-bold">N/A</p>
            </div>
            <div className="mb-4 personal-item d-flex  border-bottom border-1 ">
              <p className="text-secondary">Passport Number	 </p>
              <p className="ms-5 fw-bold">N/A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
