import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

        // Add the resize event listener
        window.addEventListener('resize', toggleNav);

        // Initialize on component 
        toggleNav();

        // Cleanup function
        return () => {
            window.removeEventListener('resize', toggleNav);
        };
    }, []);


    const handleNavBar = () => {
        setNavOpen(prev => !prev)
    }
  

    return (
        <>
            {/* <!-- Navigation --> */}
            {!mobileNav ? (
                <div className="flex flex-row justify-around bg-[rgb(26,11,46)] h-[50px] items-center">
                    <div>
                        <img src={logo} alt="Logo" className="w-fit h-10" />
                    </div>
                    <div className="flex flex-row gap-5">
                        <NavLink to="/" className="hover:border-b-2  transition-all duration-300">
                            Home
                        </NavLink>
                        <NavLink to="/skills" className="hover:border-b-2  transition-all duration-300">
                            Skills
                        </NavLink>
                        <NavLink to="/projects" className="hover:border-b-2  transition-all duration-300">
                            Projects
                        </NavLink>
                        <NavLink to="/about" className="hover:border-b-2  transition-all duration-300">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="hover:border-b-2  transition-all duration-300">
                            Contact
                        </NavLink>
                    </div>
                </div>
            ) : navOpen ? (
                <div className="relative flex flex-col  h-screen bg-[rgb(26,11,46)] gap-5 items-center justify-center">
                    <GiCrossedBones className='absolute top-5 right-7 w-7 h-7 cursor-pointer' aria-label="Close menu " onClick={handleNavBar}/>
                    <NavLink to="/" className="">
                        Home
                    </NavLink>
                    <NavLink to="/skills" className="">
                        Skills
                    </NavLink>
                    <NavLink to="/projects" className="">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="">
                        Contact
                    </NavLink>
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
