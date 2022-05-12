import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider ,
   onAuthStateChanged, signInWithPopup,
    signOut, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import initAuthentication from '../components/Firebase/Firebase-init';

initAuthentication();


const useFirebase = () => {
const provider = new GoogleAuthProvider();
const auth = getAuth();
const [user,setUser]=useState({})
const [error,setError] = useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [displayName,setDisplayName]=useState("");

const signInUsingGoogle =()=>{
  return  signInWithPopup(auth,provider)
   .catch(error => {
     setError(error.message);
     });
 }

//  here start email authentication

 const creatNewUserWithEmail =(email,password)=>{
 return createUserWithEmailAndPassword(auth, email, password)
 
 }


 const signInWithEmail=(email,password)=>{
 return signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
 }

 // here Email Change
 const handleEmailChange = e=>{
  setEmail(e.target.value);
}
// here password Change
const handlePasswordChange = e=>{
  setPassword(e.target.value);
}

// here password Change
const handleNameChange = e=>{
  console.log(e.target.value);
  setDisplayName(e.target.value);
}
//  here use ing logout
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
user,error,setUser,setError,
creatNewUserWithEmail,
signInWithEmail,email,password,displayName,handleEmailChange,handleNameChange,handlePasswordChange
  };
};

export default useFirebase;