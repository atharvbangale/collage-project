import React from 'react'
import serchicon from '../assets/search.svg'

const Navbar = () => {
  return (
<div className="bg-gradient-to-t from-gray-900 to-gray-800 h-26 w-full relative font-sans text-sm text-white border-b-3-black">


  <div className="flex space-x-9 font-extrabold absolute left-45 top-1/2 -translate-y-1/2">
    <p className="hover:text-blue-400 cursor-pointer">Raise Capital</p>
    <p className="hover:text-blue-400 cursor-pointer">Browse Company</p>
  </div>


  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extralight text-3xl cursor-pointer">
    <p>FUNDO</p>
  </div>

 
  <div className="flex space-x-9 font-extrabold absolute right-45 top-1/2 -translate-y-1/2 items-center">
    <p className="hover:text-blue-400 cursor-pointer">Sign In</p>

    <div className="border-2 border-white w-[120px] h-[35px] pt-1 text-center hover:bg-blue-500 hover:border-transparent hover:delay-100 cursor-pointer">
      <p>Get Started</p>
    </div>

    <img
      src={serchicon}
      alt="Search"
      className="w-5 h-5 inline-block cursor-pointer invert"
    />
  </div>

</div>




  
  )
}

export default Navbar
