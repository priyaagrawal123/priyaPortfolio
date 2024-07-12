import React from 'react';
import image1 from "../assets/image1.png"; // Update the correct path to your image
import image2 from "../assets/image2.png"; // Update the correct path to your image

const projects = [
    {
        id: 1,
        title: "E-localhood: Your Business Our Priority",
        description: "E-Localhood is an e-commerce website containing seller, customer, service provider, and the main motive of this is to give small business owners a platform to grow their business.",
        technology: "Technology: ReactJs, JavaScript, HTML, CSS, Figma, Axios",
        image: image1,
        github: "https://github.com/priyaagrawal123/eLocalhood-MyProject"
    },
    {
        id: 2,
        title: "Devfolio",
        description: "Devfolio is a developer portfolio website built with modern web technologies.",
        technology: "Technology: ReactJs, JavaScript, Vite.js, Tailwind CSS, HTML, CSS",
        image: image2,
        github: "https://github.com/priyaagrawal123"
    },
];

function Project() {
    return (
        <div className='min-h-screen bg-slate-900 p-5'>
            <div className='flex justify-center h-2 w-full'>
                <h1 className='text-white justify-center font-semibold text-5xl p-7'>Projects</h1>
            </div>
            <div className='mt-40 space-y-10'>
                {projects.map((project) => (
                    <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-10 p-5 bg-black-500" key={project.id}>
                        {/* <img src={project.image}></img> */}
                        <img className="w-full md:w-4/6 h-auto rounded-lg" src={project.image} alt={project.title} />
                        <div className='text-white text-3xl mt-5 md:mt-0'>
                            <h1 className='text-white font-semibold '>{project.title}</h1>
                            <p className='mt-4'>{project.description}</p>
                            <p className=' mt-2'>{project.technology}</p>
                            <a className="text-blue-500/75 underline " href={project.github} target="_blank" rel="noopener noreferrer">
                                {project.github}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Project;
