import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaBlog, FaTelegram } from 'react-icons/fa';

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

const Blog = () => {
    return (
        <section id="blog" className="py-16 bg-black flex items-center justify-center">
            <div className="container mx-auto px-6 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                <div className='flex-1 bg-gray-800 rounded-lg shadow-2xl p-8 transition-transform transform'>
                    <h2 className="text-4xl font-bold text-center mb-4 text-indigo-400">About Me</h2>
                    <p className="text-lg mb-6 text-gray-300">
                        Hi! I’m Jasur, a dedicated Frontend Developer with a passion for creating engaging web experiences. My expertise lies in HTML, CSS, and JavaScript, focusing on frameworks like React and Tailwind CSS.
                    </p>
                    <p className="text-lg text-gray-300">
                        When I’m not coding, I enjoy contributing to open-source projects and advocating for web accessibility. Thank you for visiting my portfolio—let’s connect and create something amazing together!
                    </p>
                </div>
                <div className='flex-1 bg-gray-800 rounded-lg shadow-2xl p-8 transition-transform transform'>
                    <h2 className="text-4xl font-bold text-center mb-6 text-indigo-400">My Links</h2>
                    <div className="grid grid-cols-1 gap-6">
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

export default Blog;