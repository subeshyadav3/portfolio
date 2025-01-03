import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiC, SiMongodb, SiPostman } from "react-icons/si";
import Progress from "./contents/progress";
import { motion } from "framer-motion";

const Skill = () => {
  // Icons array representing technologies
  const icons = [
    <FaNodeJs className="w-[80px] h-[50px] px-3 text-green-500" />,
    <FaReact className="w-[80px] h-[50px] px-3 text-blue-500" />,
    <SiJavascript className="w-[80px] h-[50px] px-3 text-yellow-500" />,
    <FaPython className="w-[80px] h-[50px] px-3 text-blue-400" />,
    <SiCplusplus className="w-[80px] h-[50px] px-3 text-purple-500" />,
    <SiC className="w-[80px] h-[50px] px-3 text-blue-700" />,
    <SiMongodb className="w-[80px] h-[50px] px-3 text-green-600" />,
    <SiPostman className="w-[80px] h-[50px] px-3 text-orange-500" />,
  ];

  return (
    <motion.div id='skill'
      className="bg-[#11071F] flex flex-col overflow-hidden items-center"
      initial={{ opacity: 0.4 }}
      whileInView={{ opacity: 1 }} // Animate when in view
      viewport={{ once: true, amount: 0.5 }} // Trigger when 20% of the element is in view
      transition={{ duration: 1 }}
    >
      {/* Skills Title Section */}
      <motion.p
        className="tittle-style"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Skills
      </motion.p>

      {/* Scrolling Container for Skills Icons */}
      <motion.div
        className="infinite-move-skill-container sm:w-1/2 p-5 flex overflow-hidden w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="infinite-move-skill flex"
          whileInView={{ x: ["0%", "-100%"] }} // Trigger scrolling effect
          transition={{
            repeat: "loop", // Infinite loop
            duration: 20, // Adjust speed of scrolling
          }}
        >
          {icons}
          {icons} {/* Duplicate for seamless scrolling */}
        </motion.div>
      </motion.div>

      
        <Progress />
      
    </motion.div>
  );
};

export default Skill;
