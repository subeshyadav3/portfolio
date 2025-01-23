import React from 'react';
import hero_gradient from '../assets/hero_gradient.png';
import photo from '../assets/photo.png';
import { BsRocketTakeoffFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { motion } from 'framer-motion'; // Importing Framer Motion
// import line from '../assets/line.svg';
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNumpy } from "react-icons/si";

import { SiTailwindcss } from "react-icons/si";


const Hero = () => {
    return ( //bg-[#11071F]
        <div id='hero' className="pb-[100px]  flex items-center  pt-10 flex-col md:flex-row justify-center hero-image  h-[100vh]"
        >
            <motion.div
                className="pt-10 flex z-10 items-center justify-center w-full md:w-1/2   relative"
                initial={{ opacity: 0,scale:0.5 }}
                animate={{ opacity: 1,scale:1 }}
                transition={{ duration: 1, delay: 0.5 }}
            > 

                
                {/* <img src='/test.png' className='absolute blur-md'/> */}
                <div className='photo-parent main-photo'>
                <img src="/subesh.png" className='photo z-10' alt="" />
                </div>
                <DiJavascript className='bg-orange-400 opacity-20 rounded-lg w-10 h-10 title-javascript'/>
                <FaNodeJs className='bg-purple-400 opacity-30 rounded-lg w-10 h-10 title-node' />
                <FaPython className='bg-green-400 opacity-60 rounded-lg w-10 h-10 title-python' />
                <SiMongodb className='bg-yellow-400 opacity-60 rounded-lg w-10 h-10 title-mongo ' />
                <SiNumpy className='bg-purple-400 opacity-60 rounded-lg w-10 h-10 title-numpy ' />
                <SiTailwindcss className='bg-red-400 opacity-60 rounded-lg w-10 h-10 title-tailwind' />

            </motion.div>

            <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
             
            >

                {/* <img src={line} className='absolute h-[50%]]' /> */}
                <div className="pt-10">
                    <motion.p
                        className="font-Preahvihear md:text-2xl lg:text-3xl sm:text-xl pl-10 pt-5"
                        initial={{ opacity: 0, y: -20,scale:0.9 }}
                        animate={{ opacity: 1, y: 0,scale:1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Hi, I'm Subesh Yadav.
                    </motion.p>
                    <motion.p
                        className="font-Preahvihear pl-10 text-sm"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: .5 }}
                    >
                        Currently, pursuing computer Engineering at Pulchowk
                        <a href="https://pcampus.edu.np/" className="text-blue-400 pl-1 cursor-pointer" target="_blank">
                            <BsRocketTakeoffFill className="inline-block" />
                        </a>
                    </motion.p>
                    <motion.p
                        className="text-sm pt-10 pl-10  pr-10 max-w-[500px]"
                        initial={{  x: 80,opacity:0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                    >
                        A tech enthusiast passionate about coding, problem-solving, and exploring new technologies. Dedicated to creating innovative solutions for real-world challenges.
                    </motion.p>
                </div>
                <div className="pt-4 sm:pt-10 pl-10 gap-2 flex justify-center items-start flex-col w-full">
                    <motion.button
                        className="rounded-md p-2 bg-purple-600 download-cv"
                        initial={{ opacity: 0,scale:0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1.2, bounce: 0.25 }}
                    >
                        Download CV
                    </motion.button>

                    <div className="flex felx-row gap-2 pt-2">
                        <motion.a
                            href="https://github.com/subeshyadav3"
                            target="_blank"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2.9 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="#"
                            target="_blank"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2.9 }}
                        >
                            <CiLinkedin />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;

