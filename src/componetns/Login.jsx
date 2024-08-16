import React, { useState } from "react";
// import { auth, provider, signInWithPopup } from "../firebase.js";

export const Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  return (
    <div>
      {user ? (
        <img
          src={user.photoURL}
          alt="Profile"
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        />
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default Login;
