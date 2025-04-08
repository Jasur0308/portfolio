import React, { useState } from 'react';
import ProjectOneImage from '../assets/projects/Shopping-Store.jpg';
import ProjectTwoImage from '../assets/projects/To-Do-List.jpg';
import ProjectThreeImage from '../assets/projects/Make-Up-Store.jpg';
import ProjectFourImage from '../assets/projects/Product-List.jpg';
import ProjectFiveImage from '../assets/projects/ReqRes-users.jpg';
import ProjectSixImage from '../assets/projects/Products.jpg';
import ProjectSevenImage from '../assets/projects/Course-registration.jpg';
import ProjectEightImage from '../assets/projects/Translator.jpg';

const projects = [
    {
        title: "Shopping Store",
        description: "An e-commerce platform where users can browse, add to cart, and purchase products seamlessly, built with React and Tailwind CSS.",
        image: ProjectOneImage,
        link: "https://lesson-7-month-8.vercel.app"
    },
    {
        title: "To Do List",
        description: "A productivity app allowing users to create, manage, and track tasks efficiently, featuring local storage for persistent data.",
        image: ProjectTwoImage,
        link: "https://lesson-6-month-8.vercel.app"
    },
    {
        title: "Make-Up Store",
        description: "An online store showcasing a variety of makeup products, providing detailed information and user reviews.",
        image: ProjectThreeImage,
        link: "https://exam-month-8-wknt.vercel.app"
    },
    {
        title: "Product List",
        description: "A simple interface displaying a list of products fetched from an API, allowing users to view details of each item.",
        image: ProjectFourImage,
        link: "https://lesson-3-month-8.vercel.app"
    },
    {
        title: "ReqRes Users",
        description: "A user management application that displays a list of users with options to create, edit, and delete users.",
        image: ProjectFiveImage,
        link: "https://exam-month-7-psi.vercel.app"
    },
    {
        title: "Products",
        description: "An interactive product showcase that allows users to filter and sort products based on different criteria.",
        image: ProjectSixImage,
        link: "https://lesson-7-month-7.vercel.app"
    },
    {
        title: "Course Registration",
        description: "A platform for users to view and register for courses, featuring a clean and responsive design.",
        image: ProjectSevenImage,
        link: "https://course-registration-umber.vercel.app"
    },
    {
        title: "Translator",
        description: "A language translation tool that enables users to translate text between multiple languages using an API.",
        image: ProjectEightImage,
        link: "https://translator-pi-bay.vercel.app"
    },
];

const Projects = () => {

    return (
        <section id="projects" className="py-16 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">My Best Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-500"
                            style={{
                                boxShadow: '0 2px 0px rgba(0, 191, 255, 0.5), 0 2px 20px rgba(30, 144, 255, 0.5), 0 2px 20px rgba(0, 0, 255, 0.5)'
                            }}>
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <span className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded">
                                    View Project
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="text-center mt-8 flex gap-10 justify-center items-center">
                    <a
                        href="https://vercel.com/jasur0308s-projects"
                        target="_blank"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition duration-300"
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;