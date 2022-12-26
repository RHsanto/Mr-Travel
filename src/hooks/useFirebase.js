/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initAuthentication from "../components/Firebase/Firebase-init";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
initAuthentication();

const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  // const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/";

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, provider).catch(error => {
      setError(error.message);
    });
  };

  //  here start email authentication

  //create user
  const registerUser = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        if (userCredential.user) {
          navigate(redirect_uri);
        }
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to database
        emailUser(email, name);
        //send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(error => {});
      })
      .catch(error => {
        const errorCode = error.code;
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  //login user
  const loginUser = (email, password, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        if (userCredential.user) {
          navigate(redirect_uri);
        }
        setError("");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //  here use ing logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //save user info to database
  const emailUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://mr-travel-server.onrender.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // save google user info to database

  const GoogleUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://mr-travel-server.onrender.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    signInUsingGoogle,
    loginUser,
    registerUser,
    logOut,
    user,
    error,
    setUser,
    setError,
    isLoading,
    GoogleUser
  };
};

export default useFirebase;
