import React from 'react';
import { BookOpen, Users, BarChart } from 'lucide-react'; // Ensure these are imported
import backgroundImg from '../../../assets/images/librarium_bg.jpg'

const Hero = () => {
  return (
    <>
    <div
      // className=" hero-container container h-[80vh] mx-auto px-4 py-16"

      
    className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImg}')` }}>
      {/* Overlay for text or gradient */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
       
      </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Streamline Your Library Management
          </h1>
          <p className="text-xl mb-6">
            Efficient tools for cataloging, patron management, and insightful analytics to optimize your library operations.
          </p>
          <button className="bg-white text-green-600 font-bold py-2 px-4 rounded hover:bg-green-100 transition duration-300">
            Start Free Trial
          </button> */}
        </div>
        {/* <div className="md:w-1/2 flex justify-center space-x-4">
          <BookOpen size={80} />
          <Users size={80} />
          <BarChart size={80} />
        </div> */}
      </div> 
    </>
  );
};

export default Hero;


