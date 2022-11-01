/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import signIn from "../../images/log-in.png";
import google from "../../images/gmail.png";
import useFirebase from "../../hooks/useFirebase";

const SignIn = () => {
  const { signInUsingGoogle, loginUser, error } = useFirebase();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogle = e => {
    signInUsingGoogle().then(result => {
      navigate(redirect_uri);
      console.log(result);
    });
  };

  // login information
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSignIn = e => {
    loginUser(email, password, location);

    e.preventDefault();
  };
  return (
    <div className="signIn common-section">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 logIn">
            <div className="logIn-form w-75 p-5 mx-auto shadow bg-light d-none d-lg-block">
              <div className="btn-group mb-5 mt-4 d-flex gap-4 justify-content-between px-1 ">
                <button className="w-50 fb-btn">
                  <FaFacebookF className="fb" /> Facebook
                </button>
                <button
                  onClick={handleGoogle}
                  className="w-50 flex-btn p-0 d-flex justify-content-between"
                >
                  <img src={google} alt="" srcset="" />
                  <button className=" google-btn bg-primary w-100"> Google</button>
                </button>
              </div>
              <form onSubmit={handleSignIn}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    onBlur={handleEmailChange}
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    onBlur={handlePasswordChange}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="d-flex justify-content-between mt-3 px-2">
                  <p>
                    <input type="checkbox" name="" id="" /> Remember me{" "}
                  </p>
                  <p className="text-primary">Forget Password?</p>
                </div>
                <div className="log-btn w-25 mt-3  mx-auto">
                  <button type="submit">LOGIN</button>
                </div>
              </form>

              <div className="text-center mt-4 text-danger"> {error}</div>
              {/* signup link */}
              <p className="text-center mt-4">
                {" "}
                Not a member? <Link to="/sign-up"> Signup now</Link>
              </p>
            </div>

            {/* for mobile */}
            <div className="logIn-form  px-4 py-5 mx-auto shadow bg-light d-block d-lg-none">
              <div className="btn-group mb-5 mt-4 d-flex gap-4 justify-content-between px-1 ">
                <button className="w-50 fb-btn">
                  <FaFacebookF className="fb" /> Facebook
                </button>
                <button className="w-50 flex-btn p-0 d-flex justify-content-between">
                  <img src={google} alt="" srcset="" />
                  <button className=" google-btn bg-primary w-100"> Google</button>
                </button>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Username</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="d-flex justify-content-between mt-3 ">
                <p>
                  <input type="checkbox" name="" id="" /> Remember me{" "}
                </p>
                <p className="text-primary">Forget Password?</p>
              </div>
              <div className="log-btn w-50 mx-auto  mt-4 ">
                <button>LOGIN</button>
              </div>
              {/* signup link */}
              <p className="text-center mt-4">
                {" "}
                Not a member? <Link to="/sign-up"> Signup now</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={signIn} alt="" className="simg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
