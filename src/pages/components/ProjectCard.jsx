import React from 'react';
import { FaLink } from "react-icons/fa";

const ProjectCard = ({ title, description, photo, stack ,projectLink}) => {
    return (
        <div className='mt-10 border-purple-600 border-[1px] h-[400px] max-w-[320px] flex justify-center flex-col items-start px-2 py-5 skill-box p-5 hover:scale-105 '>
            <div className='flex justify-center items-center w-full'>
                <h1 className='flex flex-row gap-2'>{title}<a href={projectLink} target='_blank'><FaLink className='text-red-400 fill-current'/></a></h1>
            </div>
            <img src={photo} alt="" className='w-full h-[180px] pt-2 opacity-80 rounded-lg' />
            <p className=' py-5 text-wrap text-sm'>{description} </p>
            <div className='flex flex-row gap-2'>
                {stack.map((item, index) => {
                    return <h1 key={index} className='bg-purple-600 p-1 rounded-md  text-white'>{item}</h1>
                })}

            </div>
        </div>
    );
};

export default ProjectCard;