import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <div className="relative text-white bg-blue-700 font-Poppins text-xl md:text-2xl flex justify-between items-center p-4 md:p-6 font-semibold">
            <div className='bg-white rounded px-2'>
                <h1 className='text-black text-xl md:text-2xl font-semibold'>Devfolio</h1>
            </div>
            <div className="flex gap-2 md:gap-4">
                <a href="/title" className='hover:text-purple-500'>Home</a>
                <a href="/about" className='hover:text-purple-500'>About</a>
                <a href="/project" className='hover:text-purple-500'>Projects</a>
                <a href="/resume" className='hover:text-purple-500'>Resume</a>
                <a href="/contact" className='hover:text-purple-500'>Contact</a>
            </div>
            <div className='absolute md:relative flex top-4 md:top-0 right-4 md:right-0 text-white text-lg md:text-3xl gap-4'>
                <a href="https://github.com/priyaagrawal123" className='hover:text-purple-500'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/priya-agrawal-3b5516288/" className='hover:text-purple-500'><FaLinkedin /></a>
            </div>
        </div>
    );
}

export default Navbar;
