import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'; // Import react-scroll Link
import logo from '../assets/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedBones } from "react-icons/gi";

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
        setMobileNav(prev => !prev)
        setNavOpen(prev => !prev)
    }
    

    return (
        <>
            {/* <!-- Navigation --> */}
            {!mobileNav ? (
                <div className="flex flex-row justify-between sm:px-10 bg-[rgb(26,11,46)] h-[50px] items-center">
                    <div>
                        <img src={logo} alt="Logo" className="w-fit h-10" />
                    </div>
                    <div className="flex flex-row gap-5">
                        <NavLink to="/" className="hover:border-b-2  transition-all duration-300">
                            Home
                        </NavLink>
                        <Link to="skill" smooth={true} duration={500}  className="hover:border-b-2  transition-all duration-300">
                            Skills
                        </Link>
                        <Link to="project" smooth={true} duration={500} className="hover:border-b-2  transition-all duration-300">
                            Projects
                        </Link>
                        <Link to="about" smooth={true} duration={500} className="hover:border-b-2  transition-all duration-300">
                            About
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="hover:border-b-2  transition-all duration-300">
                            Contact
                        </Link>
                    </div>
                </div>
            ) : navOpen ? (
                <div className="relative flex flex-col  h-screen bg-[rgb(26,11,46)] gap-5 items-center justify-center">
                    <GiCrossedBones className='absolute top-5 right-7 w-7 h-7 cursor-pointer' aria-label="Close menu " onClick={handleNavBar}/>
                    <Link to="/" className="">
                        Home
                    </Link>
                    <Link to="skill" smooth={true} duration={500} className="">
                        Skills
                    </Link>
                    <Link to="project" smooth={true} duration={500} className="">
                        Projects
                    </Link>
                    <Link to="/about" smooth={true} duration={500} className="">
                        About
                    </Link>
                    <Link to="contact" smooth={true} duration={500} className="">
                        Contact
                    </Link>
                </div>
            ) : (
                <div className='bg-[rgb(26,11,46)]  flex justify-between pr-5 items-center '>
                    <div>
                        <img src={logo} alt="Logo" className="w-15 h-[60px] ml-10"  />
                    </div>
                    <GiHamburgerMenu className='h-[60px] w-7 cursor-pointer' onClick={handleNavBar}/>
                </div>
                

            )}
        </>
    );
}
