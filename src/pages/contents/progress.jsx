import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Progress = () => {

    const [skills, setSkills] = useState({
        creativity: 0,
        concentration: 0,
        problemSolving: 0,
    });

    useEffect(() => {
        const updateSkills = () => {
            setSkills((prev) => ({
                creativity: prev.creativity < 80 ? prev.creativity + 1 : prev.creativity,
                concentration: prev.concentration < 90 ? prev.concentration + 1 : prev.concentration,
                problemSolving: prev.problemSolving < 99 ? prev.problemSolving + 1 : prev.problemSolving,
            }));
        };

        const timer = setTimeout(updateSkills, 80);
        return () => clearTimeout(timer); // Cleanup timeout to prevent memory leaks
    }, [skills]);

    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
    };

    return (
        <motion.div 
            className="progress my-5 flex flex-col lg:flex-row gap-8 justify-center items-center sm:mx-2"
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformStyle: "preserve-3d", transform }}
        >
            {/* First Card */}
            <div className='flex flex-col gap-3 w-[350px] sm:w-[400px] mt-10 items-center rounded-sm border-2 border-[#230e41] p-3 shadow-lg shadow-[#230e41]'>
                <div className='w-full p-5 flex flex-col gap-2'>
                    <h2 className='flex items-center justify-center mb-5 pb-2 border-b-2 border-[#230e41] text-xl'>
                        Programming
                    </h2>
                    <label htmlFor="js">Javascript</label>
                    <ProgressBar className='w-[90%] sm:w-full' transitionDuration='6s' completed={90} />
                    <label htmlFor="py">Python</label>
                    <ProgressBar className='w-[80%] sm:w-full' transitionDuration='5s' completed={80} bgColor='#E44700' />
                    <label htmlFor="py">C</label>
                    <ProgressBar className='w-[90%] sm:w-full' transitionDuration='5s' completed={80} bgColor='grey' />
                    <label htmlFor="py">C++</label>
                    <ProgressBar className='w-[90%] sm:w-full' transitionDuration='5s' completed={80} bgColor='#2596be' />
                </div>
            </div>

            {/* Second Card */}
            <div className='flex flex-col gap-3 w-[350px] sm:w-[400px] mt-10 items-center rounded-sm border-2 border-[#230e41] p-3 shadow-lg shadow-[#230e41]'>
                <div className='w-full p-5 flex flex-col gap-2'>
                    <h2 className='flex items-center justify-center mb-5 pb-2 border-b-2 border-[#230e41] text-xl'>
                        Web Dev
                    </h2>
                    <label htmlFor="js">React</label>
                    <ProgressBar className='w-[80%] sm:w-full' transitionDuration='6s' completed={90} bgColor='#E705C9' />
                    <label htmlFor="js">Node.js</label>
                    <ProgressBar className='w-[80%] sm:w-full' transitionDuration='5s' completed={80} bgColor='#9CAA32' />
                    <label htmlFor="js">Express.Js</label>
                    <ProgressBar className='w-[80%] sm:w-full' transitionDuration='4s' completed={70} bgColor='#F25862' />
                    <label htmlFor="js">MongoDB</label>
                    <ProgressBar className='w-[60%] sm:w-full' transitionDuration='4s' completed={70} bgColor='#C30E59' />
                </div>
            </div>
        </motion.div>
    );
};

export default Progress;
