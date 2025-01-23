import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CustomProgressBar from "./customprogress";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Progress = () => {


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
            className="progress my-5 flex flex-col lg:flex-row gap-8 justify-center items-center sm:mx-2 mb-10"
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
            <motion.div


                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 1, delay: 0 }}
                // exit={{ opacity: 0, y: -50 }}
                className='flex flex-col gap-3 w-[350px] sm:w-[400px] skill-box mt-10 items-center  '>

                <div className='w-full p-5 flex flex-col gap-2 my-10'>
                    <h2 className='flex items-center justify-center mb-5 pb-2 border-b-2 border-[#230e41] text-xl'>
                        Programming
                    </h2>
                    <CustomProgressBar label="Javascript" completed={90} transitionDuration="6s" />
                    <CustomProgressBar label="Python" completed={80} transitionDuration="5s" bgColor="#E44700" />
                    <CustomProgressBar label="C" completed={80} transitionDuration="5s" bgColor="grey" />
                    <CustomProgressBar label="C++" completed={80} transitionDuration="5s" bgColor="#2596be" />

                </div>
            </motion.div>

            {/* Second Card */}
            <motion.div


                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0 }}
                className='flex flex-col gap-3 w-[350px] sm:w-[400px] mt-10 items-center skill-box '>
                <div className='w-full p-5 flex flex-col gap-2 my-10'>
                    <h2 className='flex items-center justify-center mb-5 pb-2 border-b-2 border-[#230e41] text-xl'>
                        Web Dev
                    </h2>
                    <CustomProgressBar label="React" completed={90} transitionDuration="6s" bgColor="#E705C9" />
                    <CustomProgressBar label="Node.js" completed={80} transitionDuration="5s" bgColor="#9CAA32" />
                    <CustomProgressBar label="Express.Js" completed={70} transitionDuration="4s" bgColor="#F25862" />
                    <CustomProgressBar label="MongoDB" completed={70} transitionDuration="4s" bgColor="#C30E59" />
                </div>
            </motion.div>

        </motion.div>
    );
};

export default Progress;
