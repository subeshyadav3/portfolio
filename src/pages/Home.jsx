import React, { useEffect } from 'react';
import Hero from './Hero';
import Skill from './skill';
import Contact from './Contact';
import Project from './projects';
import StatsSection from './client';
import Qualification from './qualification';

const Home = () => {
    

    return (
        
     
           <>
            <Hero />
            {/* <Qualification /> */}
            <Skill />
            <Project />
            <StatsSection />
            <Contact />
            </>
    );
};

export default Home;