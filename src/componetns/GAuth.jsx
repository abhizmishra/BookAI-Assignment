import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import {
  signInSuccess,
  setPhotoUrl,
  signOutUserSuccess,
} from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { FcGoogle } from "react-icons/fc";


export default function GAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => { 
    dispatch(signOutUserSuccess());
  })

  const handleGoogleClick = async () => {
   
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      
      console.log(result)
      console.log(result.user.photoURL);
      const profileUrl = result.user.photoURL;
      dispatch(setPhotoUrl(profileUrl));
      dispatch(signInSuccess(result))
      
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
      console.log(import.meta.env.FIREBASE_API);
    }
  };
  return (
    <div className="flex flex-nowrap gap-5 justify-center items-center mt-20 ">
      <button
        onClick={handleGoogleClick}
       
        type="button"
        className="flex flex-nowrap gap-5 justify-center items-center  bg-[#6590FF] p-2 rounded-lg"
      >
        {" "}
        <h1 className="text-white ml-4 ">Continue With Google</h1>
        <FcGoogle className="h-10 w-10" />
      </button>
    </div>
  );
}
  
