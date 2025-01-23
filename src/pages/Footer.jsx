import React from 'react';
import { Link } from 'react-scroll'; // Import react-scroll Link
import useNotification from './components/notification';



const Footer = () => {
    const [email, setEmail] = React.useState('');
    const {addNotification} = useNotification();

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubscribe = () => {
        try {
            if (!isValidEmail(email) && email.length < 8) {
                alert("Invalid email");
                return;
            }
            
            addNotification("Subscribed successfully");
        
            
            setEmail('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex  bg-gray-800 text-white w-full h-[250px] items-center justify-center flex-row relative" >
            <div className='flex flex-col gap-3 sm:pr-10 items-center sm:items-start'>
                <h1 className='font-poppins font-bold border-b-[1px] border-purple-600'>Join Me</h1>
                <input type="text" placeholder='email' className='p-2 rounded-md text-black' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className='rounded-md bg-purple-600 p-2' onClick={handleSubscribe}>Subscribe</button>
            </div>
            <div className='flex-col hidden sm:flex gap-2 sm:p-10 cursor-pointer '>
                <Link to='home' smooth={true} duration={500} className='nav-animation w-fit hover:text-purple-400 '>Home</Link>
                <Link to='skill' smooth={true} duration={500} className='nav-animation w-fit hover:text-purple-400 '>Skills</Link>
                <Link to='project' smooth={true} duration={500} className='nav-animation w-fit hover:text-purple-400 '>Projects</Link>
                <Link to='about' smooth={true} duration={500} className='nav-animation w-fit hover:text-purple-400 '>About</Link>
            </div>

            {/* Floating Go To Button */}
            <div className="right-5 sm:right-10 absolute">
                <Link to="nav" smooth={true} duration={500}>
                    <button className="bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-800 transition duration-200 hover:scale-105">
                        ↑
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
