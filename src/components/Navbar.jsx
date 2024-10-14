import React from 'react';
import { FaHome, FaFolder, FaBlog, FaUser, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-7">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="bg-white h-8 w-auto mr-3" />
                        <div className="text-2xl font-bold text-white">Jasur's Creations</div>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                            <FaHome className="mr-1" /> Home
                        </a>
                        <a href="#projects" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                            <FaFolder className="mr-1" /> Projects
                        </a>
                        <a href="#blog" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                            <FaBlog className="mr-1" /> Blog
                        </a>
                        <a href="#blog" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                            <FaUser className="mr-1" /> About
                        </a>
                        <a href="#contact" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                            <FaEnvelope className="mr-1" /> Contact
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button className="text-gray-300 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;