import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider , onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initAuthentication from '../components/Firebase/Firebase-init';

initAuthentication();


const useFirebase = () => {
const provider = new GoogleAuthProvider();
const auth = getAuth();
const [user,setUser]=useState({})
const [error,setError] = useState("")


const signInUsingGoogle =()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      setUser(result.user)
      console.log(result.user);
    })
   .catch(error => {
     setError(error.message);
     });
 }
 
 const logOut = ()=>{
   signOut(auth)
   .then(()=>{
     setUser({})
   })
 }

 useEffect(()=>{
  const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } 
    });
    return unsubscribe;
  },[auth])


  return{
signInUsingGoogle,
logOut,
user,error
  };
};

export default useFirebase;