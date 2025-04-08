import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import profilePicture from '../assets/my-photo.png';

const websites = [
    {
        title: "GitHub",
        url: "https://github.com/Jasur0308",
        description: "Explore my code repositories and contributions.",
        icon: <FaGithub className="text-gray-400 text-2xl" />
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/jasur-abdisoatov-a53733294",
        description: "Connect with me professionally.",
        icon: <FaLinkedin className="text-blue-500 text-2xl" />
    },
    {
        title: "Telegram",
        url: "https://t.me/Jasur_Abdisoatov_03",
        description: "Connect with me on Telegram for discussions on web development and technology.",
        icon: <FaTelegram className="text-blue-500 text-2xl" />
    }
];

const AboutMe = () => {
    return (
        <section id="about-me" className="py-16 bg-black text-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
                {/* About Me Section */}
                <div className="relative mb-12 md:mb-0 md:w-1/3 overflow-hidden">
                    <img
                        src={profilePicture}
                        alt="Jasur"
                        className="w-full h-full object-cover transition-transform transform rounded-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-30"></div>
                </div>

                <div className="md:w-2/3 text-center md:text-left md:pl-8">
                    <h2 className="text-5xl font-bold text-indigo-400 mb-4">About Me</h2>
                    <p className="text-gray-300 text-lg mb-6 max-w-full">
                        Hi! I’m Jasur, a dedicated Frontend Developer creating engaging web experiences. My expertise lies in React and Tailwind CSS. I am passionate about building responsive and user-friendly interfaces that enhance user interactions. I continually explore new technologies and best practices to refine my skills. In addition to coding, I enjoy collaborating with designers and developers to bring creative ideas to life. Outside of work, I love sharing my knowledge through blogs and engaging in community discussions about the latest trends in web development.
                    </p>

                    {/* Links Section */}
                    <h2 className="text-4xl font-bold text-center md:text-left mb-6 text-indigo-400">My Links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {websites.map((site, index) => (
                            <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="p-4 flex items-center">
                                    <div className="mr-4">{site.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
                                                {site.title}
                                            </a>
                                        </h3>
                                        <p className="text-gray-300 mb-4">{site.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;