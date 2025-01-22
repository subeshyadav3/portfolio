import React from 'react';
import Title from './components/title';
import ProjectCard from './components/ProjectCard';


const Project = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Title title="Projects" font='font-ougkeh'/>


            <div className='flex flex-row flex-wrap justify-center items-center gap-10 mb-10 '>
                <ProjectCard title='NPL API' description="This is a comprehensive API for the Nepal Premier League, providing all the necessary data to facilitate in-depth analysis and insights." photo='/projects/npl.png' stack={['NodeJS','ExpressJs']} projectLink='https://github.com/subeshyadav3/Nepal_Premier_League-NPL-_API'/>
                <ProjectCard title='Flappy Bird' description="A custom implementation of the classic Flappy Bird game, developed with my own logic to deepen my understanding and enhance my skills in JavaScript." photo='/projects/flappy.png' stack={['HTML','CSS','JavaScript']} projectLink='https://github.com/subeshyadav3/flappybird'/>
                <ProjectCard title='Weather Search' description="I developed a weather search application using React, featuring a search history function and detailed information like sunrise, sunset, and other relevant weather data." photo='/projects/weather.jpg' stack={['React','Tailwind']} projectLink='https://github.com/subeshyadav3/weather'/>
                </div>
        </div>
    );
};

export default Project;