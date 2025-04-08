import React, { useState } from 'react';
import { FaHome, FaFolder, FaUser, FaEnvelope, FaTools } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black shadow-lg sticky top-0 z-50">
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
                        <a href="#about-me" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                            <FaUser className="mr-1" /> About Me
                        </a>
                        <a href="#skills" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                            <FaTools className="mr-1" /> Skills
                        </a>
                        <a href="#projects" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                            <FaFolder className="mr-1" /> Projects
                        </a>
                        <a href="#contact" className="flex items-center text-gray-300 hover:text-blue-400 transition">
                            <FaEnvelope className="mr-1" /> Contact
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
                    <a href="#home" className="block text-gray-300 hover:text-blue-400 py-2">Home</a>
                    <a href="#about" className="block text-gray-300 hover:text-blue-400 py-2">About Me</a>
                    <a href="#skills" className="block text-gray-300 hover:text-blue-400 py-2">Skills</a>
                    <a href="#projects" className="block text-gray-300 hover:text-blue-400 py-2">Projects</a>
                    <a href="#contact" className="block text-gray-300 hover:text-blue-400 py-2">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;