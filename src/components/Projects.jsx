import React, { useState } from 'react';
import ProjectOneImage from '../assets/projects/Shopping-Store.jpg';
import ProjectTwoImage from '../assets/projects/To-Do-List.jpg';
import ProjectThreeImage from '../assets/projects/Make-Up-Store.jpg';
import ProjectFourImage from '../assets/projects/Product-List.jpg';
import ProjectFiveImage from '../assets/projects/ReqRes-users.jpg';
import ProjectSixImage from '../assets/projects/Products.jpg';
import ProjectSevenImage from '../assets/projects/Course-registration.jpg';
import ProjectEightImage from '../assets/projects/Translator.jpg';
import ProjectNineImage from '../assets/projects/Forecast.jpg';
import ProjectTenImage from '../assets/projects/Article.jpg';
import ProjectElevenImage from '../assets/projects/Meals.jpg';
import ProjectTwelveImage from '../assets/projects/Product-recipes.jpg';
import ProjectThirteenImage from '../assets/projects/Football-players.jpg';

const projects = [
    {
        title: "Project One",
        description: "A brief description of project one, highlighting its features and technologies used.",
        image: ProjectOneImage,
        link: "https://lesson-7-month-8.vercel.app"
    },
    {
        title: "Project Two",
        description: "A brief description of project two, highlighting its features and technologies used.",
        image: ProjectTwoImage,
        link: "https://lesson-6-month-8.vercel.app"
    },
    {
        title: "Project Three",
        description: "A brief description of project three, highlighting its features and technologies used.",
        image: ProjectThreeImage,
        link: "https://exam-month-8-wknt.vercel.app"
    },
    {
        title: "Project Four",
        description: "A brief description of project four, highlighting its features and technologies used.",
        image: ProjectFourImage,
        link: "https://lesson-3-month-8.vercel.app"
    },
    {
        title: "Project Five",
        description: "A brief description of project one, highlighting its features and technologies used.",
        image: ProjectFiveImage,
        link: "https://exam-month-7-psi.vercel.app"
    },
    {
        title: "Project Six",
        description: "A brief description of project two, highlighting its features and technologies used.",
        image: ProjectSixImage,
        link: "https://lesson-7-month-7.vercel.app"
    },
    {
        title: "Project Seven",
        description: "A brief description of project three, highlighting its features and technologies used.",
        image: ProjectSevenImage,
        link: "https://course-registration-umber.vercel.app"
    },
    {
        title: "Project Eight",
        description: "A brief description of project four, highlighting its features and technologies used.",
        image: ProjectEightImage,
        link: "https://translator-pi-bay.vercel.app"
    },
    {
        title: "Project Nine",
        description: "A brief description of project one, highlighting its features and technologies used.",
        image: ProjectNineImage,
        link: "https://forecast-henna.vercel.app"
    },
    {
        title: "Project Ten",
        description: "A brief description of project two, highlighting its features and technologies used.",
        image: ProjectTenImage,
        link: "https://lesson11-mu.vercel.app"
    },
    {
        title: "Project Eleven",
        description: "A brief description of project three, highlighting its features and technologies used.",
        image: ProjectElevenImage,
        link: "https://lesson-9-nvny.vercel.app"
    },
    {
        title: "Project Twelve",
        description: "A brief description of project four, highlighting its features and technologies used.",
        image: ProjectTwelveImage,
        link: "https://product-api-eight.vercel.app"
    },
    {
        title: "Project Thirteen",
        description: "A brief description of project four, highlighting its features and technologies used.",
        image: ProjectThirteenImage,
        link: "https://footbal-players.vercel.app"
    },
];

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(4);

    const handleViewMore = () => {
        setVisibleProjects((prevVisible) => prevVisible + 4); // Load 4 more projects when clicked
    };

    return (
        <section id="projects" className="py-16 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">My Best Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-500"
                            style={{
                                boxShadow: '0 2px 0px rgba(0, 191, 255, 0.5), 0 2px 20px rgba(30, 144, 255, 0.5), 0 2px 20px rgba(0, 0, 255, 0.5)'
                            }}>
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded"
                                    target='_blank'
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleProjects < projects.length && (
                    <div className="text-center mt-8 flex gap-10 justify-center items-center">
                        <button
                            onClick={handleViewMore}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition duration-300"
                        >
                            View More
                        </button>
                        <a
                            href="https://vercel.com/jasur0308s-projects"
                            target='_blank'
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition duration-300"
                        >
                        View All Projects
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;