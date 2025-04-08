import React from 'react';
import CertImage1 from '../assets/projects/English Skill (IELTS).jpg';
import CertImage2 from '../assets/projects/Certificate.jpg';
// import CertImage3 from '../assets/projects/vercel-logo.png';

const Achievements = () => {
    const achievements = [
        {
            title: "IELTS Certification",
            description: "Certified in English",
            date: "February 2024",
            image: CertImage1
        },
        {
            title: "JavaScript Mastery Course",
            description: "Completed an advanced JavaScript course, mastering ES6+ features and asynchronous programming.",
            date: "June 2023",
            image: CertImage2
        },
        // {
        //     title: "Python Programming Certification",
        //     description: "Achieved proficiency in Python, focusing on data analysis, automation, and APIs.",
        //     date: "April 2023",
        //     image: CertImage3
        // },
    ];

    return (
        <section id="achievements" className="py-16 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-indigo-400 mb-10">My Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
                            <a href={achievement.image} target="_blank" rel="noopener noreferrer">
                                <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                            </a>
                            <h3 className="text-2xl font-semibold mb-2">{achievement.title}</h3>
                            <p className="text-gray-300">{achievement.description}</p>
                            <p className="mt-4 text-indigo-400">{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;