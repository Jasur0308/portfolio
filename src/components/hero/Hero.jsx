import React from 'react';
import heroVideo from '../../assets/hero.mp4';
import CV from '../../assets/Jasur Abdisoatov CV.pdf';
import { FaArrowDown, FaFolderOpen } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            <video
                className="absolute inset-0 object-cover w-full h-full"
                autoPlay
                loop
                muted
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white px-4 md:px-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                        Welcome to My Portfolio
                    </h1>
                    <p className="mb-8 text-base md:text-lg lg:text-xl animate-fade-in delay-200">
                        I'm Jasur, a passionate Frontend Developer crafting stunning web experiences.
                    </p>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10'>
                        <a
                            href="#projects"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition duration-300 animate-fade-in delay-400 flex items-center gap-2"
                        >
                            <FaFolderOpen /> View My Work
                        </a>
                        <a
                            href={CV}
                            download
                            className="inline-block bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition duration-300 animate-fade-in delay-600 flex items-center gap-2"
                        >
                            <FaArrowDown /> Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;