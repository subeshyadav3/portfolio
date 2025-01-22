import React from 'react';
import { motion } from "framer-motion";
import { div } from 'framer-motion/client';


const Title = ({ title,font='sans-serif' }) => {
    return (
        <div className='tittle-container'>
            <motion.p
                className="tittle-style "
                style={{fontFamily:font}}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
                <p className='z-10'>{title}</p>
            </motion.p>
        </div>
    );
}

export default Title;