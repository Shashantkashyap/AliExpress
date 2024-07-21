import React, { useState } from 'react';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/common/Navbar';


const SendSignInLink = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendSignInLink = async (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: 'ali-express-obvp0jupx-shashants-projects.vercel.app/finishSignUp', // Update with your redirect URL
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      setMessage('Email sent! Check your inbox.');
      localStorage.setItem("email", email);
      toast.success('Email sent! Check your inbox.');
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message);
    }
  };


  return (
    <div>
      <Toaster/>
      <div className='bg-black'>
        <Navbar/>
      </div>
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      
     
      <div className="mb-2 p-4">
        <img className=" w-44 h-44 p-8 rounded-full" src="https://w7.pngwing.com/pngs/459/171/png-transparent-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-sign-thumbnail.png" alt="Header Image" />
      </div>

      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <img className=" w-32 h-28 rounded" src="https://steamuserimages-a.akamaihd.net/ugc/1795268224996022021/A8388FF4E10DD0B3608CF7FE0585DCB24FFF7DD2/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="Logo" />
        </div>

        <h2 className="text-2xl font-bold mb-4">Sign In / Register</h2>
        <form onSubmit={sendSignInLink} className="w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Send Sign-In Link
          </button>
        </form>
        <p className="mt-4 text-center text-green-500">{message}</p>
      </div>
    </div>
    </div>
  );
};

export default SendSignInLink;
