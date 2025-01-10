import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="w-full flex justify-center items-center contact border-t-[#2d1253] border-t-2 py-10">
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="h-[450px] w-[350px] bg-[#1E0C2A] p-8 shadow-2xl rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
                <form className="flex flex-col space-y-4">
                    <h1 className="text-3xl font-extrabold text-center text-white mb-5">Contact Us</h1>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    ></textarea>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
