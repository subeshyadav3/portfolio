import React from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

const ProjectCard = ({ title, description, photo, stack, projectLink }) => {
  return (
    <motion.div
      className="mt-10 shadow-md hover:shadow-pink-700 hover:shadow-lg shadow-purple-400 border-purple-600 border-[1px] h-[400px] w-[320px] flex justify-center flex-col items-start px-2 py-5 skill-box p-5 hover:scale-105"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="w-full">
        <h1 className="flex flex-row gap-2">
          {title}
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <FaLink className="text-red-400 fill-current" />
          </a>
        </h1>
      </div>
      <img
        src={photo}
        alt={title}
        className="w-full h-[180px] pt-2 opacity-80 rounded-lg"
      />
      <p className="py-5 text-wrap text-sm">{description}</p>
      <div className="flex flex-row gap-2 w-full items-center justify-center sm:justify-start">
        {stack.map((item, index) => (
          <h1
            key={index}
            className="bg-purple-600 p-1 rounded-md text-white"
          >
            {item}
          </h1>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
