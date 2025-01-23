import React from 'react';
import { motion } from 'framer-motion';
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import useNotification from './components/notification';
import { a } from 'framer-motion/client';

const Contact = () => {
    const { addNotification } = useNotification();
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            addNotification("Copied to clipboard");
          })
          .catch((err) => {
            addNotification("Failed to copy to clipboard");
          });
      };
    
    const sendMessage = (e) => {
        e.preventDefault();
        addNotification("Message Sent Thank you!");
    }

    return (
        <section className="w-full flex text-black justify-center items-center contact border-t-[#2d1253] border-t-2 py-10 mb-10 ">
            <div className='rounded-lg bg-purple-700  border-purple-700  border-[1px] w-[50px] flex flex-col gap-5 justify-center items-center md:w-[70px]   hover:scale-105 mr-4 sm:mr-10 md:mx-10 lg:mx-10 text-wrap' >
            
            <CgMail 
        className='w-[40px] sm:w-[70px] p-1 h-[50px] md:h-[60px] hover:scale-105 cursor-pointer'
        onClick={()=> handleCopy("subeshgaming@gmail.com")}
      />
      <CiLinkedin 
        className='w-[40px] sm:w-[70px] p-1 h-[50px] md:h-[60px] hover:scale-105 cursor-pointer'
        onClick={() => handleCopy("https://www.linkedin.com/in/subeshyadav3/")}
      />
      <FaGithub 
        className='w-[40px] sm:w-[70px] p-1 h-[50px] md:h-[60px] hover:scale-105 cursor-pointer'
        onClick={() => handleCopy("https://github.com/subeshyadav3")}
      />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
                className="h-[400px] w-[290px] sm:w-[320px] md:w-[600px]  mt-10 skill-box bg-[#1E0C2A] flex-row flex  p-8  shadow-lg shadow-purple-400 hover:shadow-2xl hover:shadow-purple-600 rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
                {/* <img src='/contact.gif' alt="Contact" className="w-full h-[200px] object-cover rounded-md" /> */}
                <div className=' flex-1 px-10 hidden md:flex justify-center items-center'>
                    <img  src='/contact.png' className='w-[300px] h-[200px] p-5'/>
                </div>
                <form className="flex flex-col space-y-4   ">
                    <h1 className="text-3xl font-extrabold text-center text-white mb-5">Contact Us</h1>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className=" px-2 sm:px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className=" px-2 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        className=" px-2 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    ></textarea>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        onClick={sendMessage}
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
