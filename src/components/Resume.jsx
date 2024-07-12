import React from "react";
import { SiJinja } from "react-icons/si";
import image3 from "../assets/image3.png";

function Resume() {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <a href="/Priya_Agrawal.pdf" download className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Download Resume
            </a>
            <img className="w-auto h-full object-cover rounded-md shadow-lg" src={image3} alt="Resume Thumbnail" />
        </div>
    );
}

export default Resume;
