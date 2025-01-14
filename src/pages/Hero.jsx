import React from 'react';
import hero_gradient from '../assets/hero_gradient.png';
import photo from '../assets/photo.png';
import { BsRocketTakeoffFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { motion } from 'framer-motion'; // Importing Framer Motion
// import line from '../assets/line.svg';


const Hero = () => {
    return ( //bg-[#11071F]
        <div className="pb-[100px]  flex items-center pt-10 flex-col sm:flex-row justify-center hero-image" id='home'> 
            <motion.div 
                className="pt-10 flex flex-row z-10" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                <div className="relative top-2">
                    <svg width="122" height="118" className="absolute left-[95px] top-[-32px]" viewBox="0 0 122 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.4098 82.3962C22.4098 82.3962 22.4097 82.3963 22.5406 82.4697C22.612 82.6016 22.612 82.6016 22.612 82.6016L22.6194 82.5976L22.6419 82.5855L22.7304 82.5382C22.8083 82.4967 22.9232 82.436 23.071 82.3588C23.3665 82.2044 23.7933 81.9845 24.3184 81.7225C25.3686 81.1985 26.8109 80.5067 28.3798 79.8349C29.9492 79.1628 31.6423 78.5121 33.1948 78.0693C34.753 77.6248 36.1485 77.3961 37.1322 77.5499L37.1785 77.2535C36.1259 77.089 34.6764 77.3347 33.1125 77.7808C31.5429 78.2285 29.8369 78.8846 28.2617 79.5591C26.6859 80.2339 25.2381 80.9284 24.1844 81.4541C23.6575 81.717 23.229 81.9378 22.932 82.0929C22.9252 82.0964 22.9185 82.0999 22.9118 82.1034C22.9569 82.0199 23.0076 81.9253 23.0634 81.8204C23.3077 81.3614 23.6489 80.7059 24.0373 79.9196C24.8138 78.3475 25.78 76.2499 26.5355 74.1525C27.2892 72.0603 27.8407 69.9487 27.7722 68.356C27.7379 67.5586 27.5475 66.871 27.1285 66.3832C26.7048 65.8901 26.0675 65.6243 25.1923 65.6328L25.1952 65.9328C26.0048 65.9249 26.5483 66.1683 26.9009 66.5787C27.2582 66.9946 27.4396 67.6049 27.4725 68.3689C27.5383 69.8989 27.0053 71.9631 26.2533 74.0508C25.5031 76.1333 24.5424 78.2197 23.7684 79.7867C23.3815 80.5699 23.0416 81.2227 22.7986 81.6795C22.677 81.9079 22.5797 82.0873 22.5128 82.2096C22.4794 82.2707 22.4535 82.3175 22.4361 82.3489L22.4163 82.3845L22.4098 82.3962ZM22.5406 82.4697L22.612 82.6016L22.1564 82.8481L22.4098 82.3962L22.5406 82.4697Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M60.8032 46.1122C47.9197 53.0561 36.4217 62.8131 29.4708 74.0643L29.7261 74.2219C36.6424 63.0267 48.0951 53.3023 60.9455 46.3763C73.7959 39.4504 88.03 35.3303 100.5 35.3303V35.0303C87.9696 35.0303 73.6867 39.1684 60.8032 46.1122Z" fill="white" />
                    </svg>

                    <img src={hero_gradient} alt='hero' className='w-[200px]' />
                    <img src={photo} alt='photo' className='absolute top-12 left-14 w-[80px]' />
                </div>
                <div className='flex flex-col'>
                    <motion.p 
                        className="pl-3 font-Preahvihear" 
                        initial={{ opacity: 0, }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Hello, I am <span className="text-orange-400 font-Preahvihear">Subesh</span>
                    </motion.p>
                    <motion.p 
                        className="pt-10 border-b-[1px] w-fit font-Preahvihear text-sm md:text-md"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1, delay: 1 }}
                    >
                        A person who
                    </motion.p>
                    <motion.p 
                        className="pt-1 text-xl md:text-2xl"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Just Love to
                    </motion.p>
                    <motion.p 
                        className="pt-1 text-xl md:text-2xl"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1, delay: 1.8 }}
                    >
                        Learn and <span className="text-orange-400 rounded-full p-1 hero-learn animate-move-left">Code!</span>
                    </motion.p>
                </div>
            </motion.div>
            <motion.div
                className=""   
                initial={{ opacity: 0}} 
                animate={{ opacity: 1 }}
                transition={{ duration: 4}}
            >
                {/* <img src={line} className='absolute h-[50%]]' /> */}
                <div className="pt-10">
                    <motion.p 
                        className="font-Preahvihear md:text-2xl lg:text-3xl sm:text-xl pl-10 pt-5"
                        initial={{ opacity: 0 ,x:110}}
                        animate={{ opacity: 1 ,x:0}}
                        transition={{ duration: 1 ,bounce:1,delay:2 }}
                    >
                        I'm a Software Engineer.
                    </motion.p>
                    <motion.p 
                        className="font-Preahvihear pl-10 text-sm"
                        initial={{ opacity: 0, x:110 }}
                        animate={{ opacity: 1, x:0 }}
                        transition={{ duration: 1, delay: 2.2,bounce:1 }}
                    >
                        Currently, I'm pursuing Engineering at Pulchowk
                        <a href="https://pcampus.edu.np/" className="text-blue-400 cursor-pointer" target="_blank">
                            <BsRocketTakeoffFill className="inline-block" />
                        </a>
                    </motion.p>
                    <motion.p 
                        className="text-sm pt-10 pl-10  pr-10 max-w-[500px]"
                        initial={{ opacity: 0,y:-20 }}
                        animate={{ opacity: 1,y:0 }}
                        transition={{ duration: 1, delay: 2.5 }}
                    >
                        A tech enthusiast passionate about coding, problem-solving, and exploring new technologies. Dedicated to creating innovative solutions for real-world challenges.
                    </motion.p>
                </div>
                <div className="pt-4 sm:pt-10 pl-10 gap-2 flex justify-center items-start flex-col w-full">
                    <motion.button 
                        className="rounded-md p-2 bg-purple-600 download-cv"
                        initial={{ opacity: 0,x:105 }}
                        animate={{ opacity: 1,x:0 }}
                        transition={{ duration: 1, delay: 2.7,bounce:0.25 }}
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
