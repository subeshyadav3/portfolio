import React from 'react';
import Hero from './Hero';
import Skill from './skill';
import Contact from './Contact';
import Project from './projects';

const Home = () => {
    return (
        <div>
           
            <Hero />
            <Skill />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;