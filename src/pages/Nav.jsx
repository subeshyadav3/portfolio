import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';
import { GiHamburgerMenu, GiCrossedBones } from 'react-icons/gi';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function Nav() {
    const [mobileNav, setMobileNav] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const toggleNav = () => {
            setMobileNav(window.innerWidth < 700);
        };
        window.addEventListener('resize', toggleNav);
        toggleNav();

        return () => {
            window.removeEventListener('resize', toggleNav);
        };
    }, []);

    const handleNavBar = () => {

        setNavOpen((prev) => !prev);
    };

    const navLinkVariants = {
        hidden: { opacity: 0, x: -50,scale:0.6 },
        visible: { opacity: 1, x: 0,scale:1, transition: { duration: 0.5, ease: 'easeOut' } },
        
    };

    return (
        <>
            {/* Navigation */}
            {!mobileNav ? (
                <motion.div
                    id='nav'
                    className="flex flex-row justify-between sm:px-10 bg-[#11071F] h-[50px] items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <img src={logo} alt="Logo" className="w-fit h-10" />
                    </div>
                    <div className="flex flex-row gap-5">
                        <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                            <Link to="home" className="nav-animation  transition-all duration-300 hover:text-pink-400">
                                Home
                            </Link>
                        </motion.div>
                        <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                            <Link to="skill" smooth={true} duration={500} className="nav-animation hover:text-pink-400 transition-all duration-300">
                                Skills
                            </Link>
                        </motion.div>
                        <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                            <Link to="project" smooth={true} duration={500} className="nav-animation hover:text-pink-400 transition-all duration-300">
                                Projects
                            </Link>
                        </motion.div>
                        <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                            <Link to="about" smooth={true} duration={500} className="nav-animation hover:text-pink-400 transition-all duration-300">
                                About
                            </Link>
                        </motion.div>
                        <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                            <Link to="contact" smooth={true} duration={500} className="nav-animation hover:text-pink-400 transition-all duration-300">
                                Contact
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            ) : navOpen ? (
                <motion.div
                    id='nav'
                    className="relative flex flex-col h-screen bg-[#11071F] gap-5 items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <GiCrossedBones className="absolute top-5 right-7 w-7 h-7 cursor-pointer" aria-label="Close menu" onClick={handleNavBar} />
                    <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                        <Link to="home" >
                            Home
                        </Link>
                    </motion.div>
                    <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                        <Link to="skill" smooth={true} duration={500} >
                            Skills
                        </Link>
                    </motion.div>
                    <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                        <Link to="project" smooth={true} duration={500} >
                            Projects
                        </Link>
                    </motion.div>
                    <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </motion.div>
                    <motion.div variants={navLinkVariants} initial="hidden" animate="visible">
                        <Link to="contact" smooth={true} duration={500} >
                            Contact
                        </Link>
                    </motion.div>
                </motion.div>
            ) : ( //
                <div className=" flex bg-[#11071F] justify-between pr-5 items-center hero-image-nav" id='nav'>
                    <div>
                        <img src={logo} alt="Logo" className="w-15 h-[60px] ml-10" />
                    </div>
                    <GiHamburgerMenu className="h-[60px] w-7 cursor-pointer" onClick={handleNavBar} />
                </div>
            )}
        </>
    );
}
