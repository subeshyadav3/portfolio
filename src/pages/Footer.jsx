import React from 'react';
import { Link } from 'react-scroll'; // Import react-scroll Link

const Footer = () => {
    const [email, setEmail] = React.useState('');
 

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };



    const handleSubscribe=()=>{
     
      
        try {
            if(!isValidEmail(email) && email.length<8){
                alert("Invalid email")
               
               
                return
            }
            
            subscribe(email)
            alert("Subscribed successfully")
            setEmail('')
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex bg-gray-800 text-white w-full h-[250px] items-center justify-center flex-row">
                <div className='flex flex-col gap-3 sm:pr-10 items-center sm:items-start'>
                    <h1 className='font-poppins font-bold border-b-[1px] border-purple-600'>Join Me</h1>
                    <input type="text" placeholder='email' className='p-2 rounded-md text-black' value={email } onChange={(e)=> setEmail(e.target.value)}/>
                    <button className='rounded-md bg-purple-600 p-2' onClick={handleSubscribe}>Subscribe</button>
                </div>
                <div className=' flex-col hidden sm:flex gap-2 sm:p-10 cursor-pointer'>
                    <Link to='/'>Home</Link>
                    <Link to='skill'>Skills</Link>
                    <Link to='project'>Projects</Link>
                    <Link to='about'>About</Link>
                </div>
               
                
    </div>

    );
};

export default Footer;