import React from 'react';
import { ContactRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex fixed z-1 w-full h-16 sm:w-[80%] mx-auto top-0 justify-between items-center bg-white py-2 px-5'>
      <h1 className='text-[#25D366] text-2xl font-bold'>BaatCheet</h1>
      <Link to="https://ashutosh.pro/" title='Ashutosh Shukla' target='_blank'><ContactRound size={30} /></Link>
    </div>
  )
}

export default Navbar