import React from "react";

const ModifyTour = () => {
  return (
    <div className="d-flex pb-5">
      <div className="form-floating w-100">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">LOCATION / TOUR</label>
      </div>
      <button className="modify-btn mt-md-0 mt-3 py-3 py-lg-0">Modify Search</button>
    </div>
  );
};

export default ModifyTour;
