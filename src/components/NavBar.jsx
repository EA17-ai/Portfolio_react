import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <div className='w-full h-16 p-4 flex bg-black text-white justify-center space-x-8'>
        <a href='/' className="hover:bg-white hover:text-black px-2 py-1 hover:rounded-lg">Home</a>
        <a href='/education' className="hover:bg-white hover:text-black px-2 py-1 hover:rounded-lg">Education</a>
        <a href='/projects' className="hover:bg-white hover:text-black px-2 py-1 hover:rounded-lg">Projects</a>
        <a href="/techinfo" className="hover:bg-white hover:text-black px-2 py-1 hover:rounded-lg">Technical information</a>
        <a href="/contact" className="hover:bg-white hover:text-black px-2 py-1 hover:rounded-lg">Contact Information</a>
        {isAuthenticated ? (
          <div className="flex space-x-3 ml-auto">
            <img src={user.picture} className=' rounded-full' alt="User" width={30} height={30} />
            <p className='mt-1'>{user.given_name}</p>
            <button className='bg-blue-500 text-white px-2 py-1 rounded-lg' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()} className='ml-auto bg-blue-500 text-white px-2 py-1 rounded-lg'> 
            LOGIN
          </button>
        )}
      </div>
    </>
  );
};

export default NavBar;
