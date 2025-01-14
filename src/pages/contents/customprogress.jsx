import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";

const CustomProgressBar = ({ label, completed, transitionDuration, bgColor }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1 }}
            ref={ref}
        >
            <label>{label}</label>
            <ProgressBar
                completed={inView ? completed : 0}
                transitionDuration={transitionDuration}
                bgColor={bgColor}
            />
        </motion.div>
    );
};

export default CustomProgressBar;
