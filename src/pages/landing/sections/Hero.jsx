import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import backgroundImg from '../../../assets/images/librarium_bg.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center " style={{ backgroundImage: `url('${backgroundImg}')` }}>
      {/* Overlay for text or gradient */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-start p-8 md:p-16 lg:p-24">
        <div className="max-w-lg text-left mt-36">
          {/* Catchy Message with Typewriter Effect */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"> {/* Changed to text-purple-400 */}
            <Typewriter
              words={['Streamline Your Library Operations', 'Manage Books with Ease', 'Engage with Your Patrons Seamlessly']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-white mb-8"> {/* Changed to text-purple-300 */}
            Simplify your library management with Librarium.
          </p>

          {/* Get Started Button */}
          <Link to="/register" className="bg-secondary-light text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition duration-300">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
