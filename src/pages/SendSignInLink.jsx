import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/common/Navbar';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [tab, setTab] = useState('signIn'); // 'signIn' or 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only needed for registration
  const [message, setMessage] = useState('');
const navigate = useNavigate()
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Sign in successful!');
      localStorage.setItem("email", email);
      toast.success('Sign in successful!');
      navigate("/")
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Registration successful! You can now sign in.');
      toast.success('Registration successful! You can now sign in.');
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Toaster />
      <div className='bg-black'>
        <Navbar />
      </div>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        <div className="mb-2 p-4">
          <img className=" w-44 h-44 p-8 rounded-full" src="https://w7.pngwing.com/pngs/459/171/png-transparent-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-sign-thumbnail.png" alt="Header Image" />
        </div>

        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <img className=" w-32 h-28 rounded" src="https://steamuserimages-a.akamaihd.net/ugc/1795268224996022021/A8388FF4E10DD0B3608CF7FE0585DCB24FFF7DD2/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="Logo" />
          </div>

          <h2 className="text-2xl font-bold mb-4">{tab === 'signIn' ? 'Sign In' : 'Register'}</h2>

          <div className="w-full flex justify-center mb-4">
            <button
              onClick={() => setTab('signIn')}
              className={`px-4 py-2 ${tab === 'signIn' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-l`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab('register')}
              className={`px-4 py-2 ${tab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-r`}
            >
              Register
            </button>
          </div>

          {tab === 'signIn' ? (
            <form onSubmit={handleSignIn} className="w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Sign In
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Register
              </button>
            </form>
          )}

          <p className="mt-4 text-center text-green-500">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
