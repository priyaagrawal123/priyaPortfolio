import React from 'react';

const About = () => {
    return (
        <div className='flex justify-center items-center min-h-screen p-4' style={{ backgroundImage: 'url("your-background-image-url.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='bg-gray-500 bg-opacity-70 p-4 md:p-6 rounded-xl border-2 shadow-lg max-w-screen-lg w-full max-h-screen overflow-y-auto'>
                {/* Skills Section */}
                <div className='mb-4'>
                    <div className='text-white flex flex-col items-center text-2xl md:text-3xl py-2 font-semibold'>
                        <h1 className='text-white text-center text-2xl md:text-3xl py-2 px-4 font-bold inline-block rounded-xl'>
                            Skills
                        </h1>
                        <hr className="border-t-4 border-green-500 w-2/3 my-2" />
                    </div>
                    <div className='text-white justify-center flex flex-wrap md:flex-nowrap gap-4 md:gap-6 py-2 font-bold text-lg md:text-xl'>
                        <ul className='space-y-2 md:space-y-3'>
                            <li className='list-disc'>ReactJs</li>
                            <li className="list-disc">JavaScript</li>
                            <li className="list-disc">HTML & CSS</li>
                            <li className="list-disc">TailwindCSS</li>
                        </ul>
                        <ul className='space-y-2 md:space-y-3'>
                            <li className="list-disc">DSA</li>
                            <li className='list-disc'>C</li>
                            <li className='list-disc'>Vite.js</li>
                        </ul>
                    </div>
                    <hr className="border-t-4 border-green-500 w-2/3 my-2 mx-auto" />
                </div>

                {/* Education Section */}
                <div className='mb-4'>
                    <div className='text-white flex flex-col items-center text-2xl md:text-3xl py-2 font-semibold'>
                        <h1 className='text-white text-center text-2xl md:text-3xl py-2 px-4 font-bold inline-block rounded-xl'>
                            Education
                        </h1>
                        <hr className="border-t-4 border-green-500 w-2/3 my-2" />
                    </div>
                    <div className='text-white justify-center flex gap-4 md:gap-6 py-4 font-bold text-lg md:text-xl'>
                        <ul className='space-y-2 md:space-y-3'>
                            <li className='list-disc'>BSc (Computer Science): Barwale College, Jalna-431203</li>
                            <li className='list-disc'>MSc (Scientific Computing): Savitribai Phule Pune University, Pune-411011</li>
                        </ul>
                    </div>
                    <hr className="border-t-4 border-green-500 w-2/3 my-2 mx-auto" />
                </div>

                {/* Hobbies Section */}
                <div>
                    <div className='text-white flex flex-col items-center text-2xl md:text-3xl py-2 font-semibold'>
                        <h1 className='text-white text-center text-2xl md:text-3xl py-2 px-4 font-bold inline-block rounded-xl'>
                            Hobbies
                        </h1>
                        <hr className="border-t-4 border-green-500 w-2/3 my-2" />
                    </div>
                    <div className="text-white flex items-center justify-center gap-4 md:gap-6 font-bold text-lg md:text-xl py-4">
                        <ul className='space-y-2 md:space-y-3 text-center'>
                            <li className=''>Designing</li>
                            <li className=''>Sketching</li>
                            <li className=''>Dance</li>
                            <li className=''>Baking</li>
                            <li className=''>Management / Organizing Different Activities</li>
                        </ul>
                    </div>
                    <hr className="border-t-4 border-green-500 w-2/3 my-2 mx-auto" />
                </div>
            </div>
        </div>
    );
}

export default About;
