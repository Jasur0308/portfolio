import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">Contact Me</h2>
                <div className="flex flex-col items-center">
                    <p className="text-lg mb-4 text-center max-w-xl">
                        I’d love to hear from you! Feel free to reach out via any of the methods below.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
                            <h3 className="text-lg font-semibold flex items-center">
                                <FaEnvelope className="mr-2 text-indigo-400" /> Email
                            </h3>
                            <p className="text-indigo-400">
                                <a href="mailto:jasurabdisoatov03@gmail.com" className="hover:underline">jasurabdisoatov03@gmail.com</a>
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
                            <h3 className="text-lg font-semibold flex items-center">
                                <FaPhone className="mr-2 text-indigo-400" /> Phone
                            </h3>
                            <p className="text-indigo-400">
                                <a href="tel:+998915762003" className="hover:underline">+998 91 576 20 03</a>
                            </p>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
                            <h3 className="text-lg font-semibold flex items-center">
                                <FaMapMarkerAlt className="mr-2 text-indigo-400" /> Location
                            </h3>
                            <p className="text-indigo-400">Tashkent, Uzbekistan</p>
                        </div>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/jasur-abdisoatov-a53733294"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded shadow-lg transition-transform transform hover:scale-105"
                    >
                        <FaLinkedin className="inline-block mr-2" /> Connect on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;