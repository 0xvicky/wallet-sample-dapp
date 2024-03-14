import React, {useState} from "react";

const Navbar = () => {
  const [connectedAddress, setConnectedAddress] = useState(null);

  return (
    <>
      <nav className='bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OJU9AYeSWQpiYG0jyQkx1Yzq-PiBzPgW8w&usqp=CAU'
            alt='logo'
            className='h-8 mr-4'
          />
          <div className='flex items-center text-white'>
            <a
              href='/'
              className='hover:text-gray-300 mr-4'>
              Home
            </a>
            <a
              href='/'
              className='hover:text-gray-300 mr-4'>
              WhyBit
            </a>
            <a
              href='/'
              className='hover:text-gray-300'>
              Portfolio
            </a>
          </div>
        </div>
        <div className='flex items-center'>
          <button className='bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'>
            Connect
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
