import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiAntdesign } from 'react-icons/si';

const skills = [
    { name: 'HTML', level: 'Advanced', icon: <FaHtml5 size={40} className="text-orange-600" /> },
    { name: 'CSS', level: 'Advanced', icon: <FaCss3Alt size={40} className="text-blue-600" /> },
    { name: 'JavaScript', level: 'Intermediate', icon: <FaJsSquare size={40} className="text-yellow-500" /> },
    { name: 'React', level: 'Intermediate', icon: <FaReact size={40} className="text-blue-400" /> },
    { name: 'Tailwind CSS', level: 'Advanced', icon: <SiTailwindcss size={40} className="text-teal-400" /> },
    { name: 'TypeScript', level: 'Intermediate', icon: <SiTypescript size={40} className="text-blue-500" /> },
    { name: 'Ant Design', level: 'Intermediate', icon: <SiAntdesign size={40} className="text-red-500" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 bg-black text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:bg-indigo-600 transition-transform transform hover:scale-105"
                            style={{ boxShadow: '0 4px 10px rgba(0, 191, 255, 0.5)' }} // Updated to blue shadow
                        >
                            <div className="mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                            <p className="text-gray-300">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;