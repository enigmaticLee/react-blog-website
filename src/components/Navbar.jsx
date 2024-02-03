import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import Modal from './Modal';




const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
    //navItems
    const navItems = [
        {path:'/', link:'Home'},
        {path:'/profolio', link:'Profolio'},
        {path:'/services', link:'Services'},
        {path:'/blogs', link:'Blogs'},
        {path:'/about', link:'About'},
        {path:'/contact', link:'Contact'},
    ]

    //model details
    const openModal = () => {
      setIsModalOpen(true);
    }
    
    const closeModal = () =>{
      setIsModalOpen(false);
    }
  return (
    <header className='bg-gray-300 text-white fixed top-0 right-0 left-0 z-20'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-xl font-bold text-black'>KEN LEE <span className='text-black font-normal'>PHOTOGRAPHY</span></a>

        {/* navitems for lg devices */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({path, link}) => <li className='text-white' key={path}>
              <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }  to={path}>{link}</NavLink>
            </li>)
          }
        </ul>

        {/* menu icons */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href="/" className='hover:text-black'><FaFacebookSquare /></a>
          <a href="/" className='hover:text-black'><FaInstagram /></a>
          <a href="/" className='hover:text-black'><FaLine /></a>
          <a href="/" className='hover:text-black'><BsTwitterX /></a>
          <button onClick={openModal} className='bg-white text-gray-500 px-6 py-2 font-medium rounded hover:bg-gray-500
           hover:text-white transition-all duration-200 easy-in'>Log in</button>
        </div>
        
        {/* our modal component is here */}
        <Modal isOpen={isModalOpen} onClose={closeModal}/>

        {/* mobile menu btns, display mobile screen */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='cursor-pointer'>
            {
              isMenuOpen ? <FaXmark className='w-6 h-6'/> : <FaBars className='w-6 h-6'/>
            }
            
          </button>
        </div>
      </nav>

      {/* menu items only for mobile */}
      <div>
      <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white 
      ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            navItems.map(({path, link}) => <li className='text-black' key={path}>
              <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
            </li>)
          }
        </ul>
      </div>
    </header>
  )
}

export default Navbar