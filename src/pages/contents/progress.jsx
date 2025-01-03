import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
import { motion, useInView } from "framer-motion";

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
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true }); // Animation will trigger only once when in view
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
    };
    return (
        <motion.div className="progress my-5 flex flex-col md:flex-row gap-8 sm:gap-12 justify-center items-center sm:mx-2"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
        >
            <div className='flex flex-col gap-3 w-[400px] mt-10 items-center'>
                <label htmlFor="js">Javascript</label>
                <ProgressBar to='js' className='w-[80%] sm:w-full ' transitionDuration='6s' completed={90} customLabel='' animateOnRender='true' />
                <label htmlFor="py">Python</label>
                <ProgressBar className='w-[80%] sm:w-full' transitionDuration='5s' completed={80} bgColor='#E44700   ' customLabel='' animateOnRender='true' />
                <label htmlFor="js">React</label>
                <ProgressBar className='w-[80%] sm:w-full' transitionDuration='6s' completed={90} bgColor='#E705C9' customLabel='' animateOnRender='true' />
                <label htmlFor="js">Node.js</label>
                <ProgressBar className='w-[80%] sm:w-full' transitionDuration='5s' completed={80} bgColor='#9CAA32' customLabel='' animateOnRender='true' />
                <label htmlFor="js">Pandas & Numpy</label>
                <ProgressBar className='w-[80%] sm:w-full' transitionDuration='4s' completed={60} bgColor='#F25862' customLabel='' animateOnRender='true' />
            </div>
            <div className='flex  flex-col gap-3 mt-2 pt-3 md:pt-5 md:mt-10 flex-wrap'>
                <div className='flex w-[150px] sm:flex-col flex-row problem-solving'>

                    <CircularProgressbar styles={buildStyles({
                        pathColor: "#2196F3", // Custom path color
                        textColor: "#fff",   // Custom text color
                        trailColor: "#333",  // Background (trail) color
                    })} value={skills.creativity} text={`${skills.creativity}%`} />
                </div>
                <div style={{ width: 90, marginLeft: 50 }} className='concentration'>
                    <CircularProgressbar styles={buildStyles({
                        pathColor: "#FF9800", // Custom path color
                        textColor: "#fff",   // Custom text color
                        trailColor: "#333",  // Background (trail) color
                    })} value={skills.concentration} text={`${skills.concentration}%`} />
                </div>
                <div className='flex gap-2 w-[150px] sm:flex-col flex-row creativity'>
                    <CircularProgressbar styles={buildStyles({
                        pathColor: "#9C27B0", // Custom path color
                        textColor: "#fff",   // Custom text color
                        trailColor: "#333",  // Background (trail) color
                    })} value={skills.problemSolving} text={`${skills.problemSolving}%`} />
                </div>
            </div>
        </motion.div>
    );
};

export default Progress;