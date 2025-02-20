import React from 'react';
import Title from './components/title';
import ProjectCard from './components/ProjectCard';

const Project = () => {
    const [showMore, setShowMore] = React.useState(false);
    return (
        <div className='flex flex-col ' id='project'>
                <Title title="Projects" font='font-ougkeh'/>


            <div className=' flex flex-col justify-center items-center'>
                <div className='flex flex-row flex-wrap justify-center items-center gap-10 mb-10'>
                <ProjectCard title='Tech Store' description="A full-stack e-commerce website developed using the MERN stack, admin and user dashboard and all features." photo='/projects/store.png' stack={['React','NodeJS','ExpressJs','MongoDB']} projectLink='https://frontendstore-five.vercel.app/' />
                <ProjectCard title='WhiteBoard App' description='An interactive whiteboard using concepts of computer graphics as a project for educational purposes.' photo='/projects/whiteboard.png' stack={['HTML','CSS','JavaScript']} projectLink='http://subesh420.com.np/'/>
                <ProjectCard title='NPL API' description="This is a comprehensive API for the Nepal Premier League, providing all the necessary data to facilitate in-depth analysis and insights." photo='/projects/npl.png' stack={['NodeJS','ExpressJs']} projectLink='https://nepal-premiere-league-npl-api.vercel.app/'/>
                
                </div>
                <div>
                {showMore ? (
                     <div className='flex flex-row flex-wrap justify-center items-center gap-10 mb-10'>
                        <ProjectCard title='Weather Search' description="I developed a weather search application using React, featuring a search history function and detailed information like sunrise, sunset, and other relevant weather data." photo='/projects/weather.jpg' stack={['React','Tailwind']} projectLink='https://github.com/subeshyadav3/weather'/>
                     <ProjectCard title='Flappy Bird' description="A custom implementation of the classic Flappy Bird game, developed with my own logic to deepen my understanding and enhance my skills in JavaScript." photo='/projects/flappy.png' stack={['HTML','CSS','JavaScript']} projectLink='https://subeshyadav3.github.io/flappybird/'/>
                
                        </div>
                     ):
                     (
                        <button onClick={() => setShowMore(true)} className='text-white bg-blue-500 px-4 py-2 rounded-md'>Show More</button>
                     )}
                    </div>
            </div>
        </div>
    );
};

export default Project;