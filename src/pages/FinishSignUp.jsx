import React, { useEffect, useState } from "react";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import toast, { Toaster } from "react-hot-toast";

const FinishSignUp = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const finishSignIn = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }

        // singIn with email verification

        try {
          await signInWithEmailLink(auth, email, window.location.href);
          window.localStorage.removeItem("emailForSignIn");
          setMessage("Sign-in successful!");

          // Set a timeout to navigate after 5 seconds
          setTimeout(() => {
            setLoading(false);
            navigate("/"); // Replace '/' with your target path
          }, 5000);
        } catch (error) {
          setMessage(error.message);
          localStorage.removeItem("email");
          setLoading(false);
          navigate("/sendSignInLink");
        }
      }
    };

    finishSignIn();
  }, [navigate]);

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Toaster />
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Finish Sign-Up</h2>
        <p className="text-red-300 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default FinishSignUp;
