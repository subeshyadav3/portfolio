import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiC, SiMongodb, SiPostman } from "react-icons/si";
import Progress from "./contents/progress";
import { motion } from "framer-motion";

const Skill = () => {
  // Icons array representing technologies
  const icons = [
    <FaNodeJs className="w-[100px] h-[80px] p-3 text-green-500 rounded-md border-2 m-2 border-purple-900 ring-inset  bg-gradient-to-bl from-[#11071F] via-[#1e156e] to-[#11071F] " />,
    <FaReact className="w-[100px] h-[80px] p-3 text-blue-500 rounded-md border-2 m-2 border-purple-900 ring-inset  bg-gradient-to-bl from-[#11071F] via-[#1e156e] to-[#0f172a] " />,
    <SiJavascript className="w-[100px] h-[80px] p-3 text-yellow-500 rounded-md border-2 m-2  border-purple-900 ring-inset   bg-gradient-to-bl from-[#11071F] via-[#1e156e] to-[#11071F] " />,
    <FaPython className="w-[100px] h-[80px] p-3 text-blue-400 rounded-md border-2 m-2 border-purple-900 ring-inset  bg-gradient-to-bl from-[#11071F] via-[#1e156e] to-[#0f172a] " />,
    <SiCplusplus className="w-[100px] h-[80px] p-3 text-purple-500 rounded-md border-2 m-2 border-purple-900 ring-inset  bg-gradient-to-bl from-[#11071F] via-[#1e156e] to-[#11071F] " />,
    <SiC className="w-[100px] h-[80px] px-3 text-blue-600 rounded-md border-2 m-2 border-purple-900 ring-inset  bg-gradient-to-bl from-[#11071Ff172a] via-[#1e156e] to-[#11071F] " />,
    <SiMongodb className="w-[100px] h-[80px] p-3 text-green-600 rounded-md border-2 m-2 border-purple-900 ring-inset  bg-gradient-to-bl from-[#11071F] via-[#1e156e] to-[#11071F] " />,
    <SiPostman className="w-[100px] h-[80px] p-3 text-orange-500 rounded-md border-2 m-2 border-purple-900 ring-inset bg-gradient-to-bl from-[#11071F] via-[#1e156e] to-[#11071F] " />,]
  return (
    <motion.div id='skill' 
      className="bg-[#11071F] flex flex-col overflow-hidden items-center "
      initial={{ opacity: 0.4 }}
      whileInView={{ opacity: 1 }} // Animate when in 11071F
      viewport={{ once: true, }} // Trigger when 20% of the element is in view
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
        className="infinite-move-skill-container sm:max-w-[80%] p-5 flex overflow-hidden w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="infinite-move-skill flex"
          whileInView={{ x: ["0%", "-100%"] }} // Trigger scrolling effect
          transition={{
            repeat: "loop", // Infinite loop
            duration: 5, // Adjust speed of scrolling
          }}
        >
          {icons}
          {icons} {/* Duplicate for seamless scrolling */}
        </motion.div>

      </motion.div><motion.div
        className="infinite-move-skill-container sm:max-w-[80%] p-5 flex overflow-hidden w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="infinite-move-skill-2 flex"
          whileInView={{ x: ["0%", "-100%"] }} // Trigger scrolling effect
          transition={{
            repeat: "loop", // Infinite loop
            duration: 5, // Adjust speed of scrolling
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
