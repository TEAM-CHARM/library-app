import React from 'react';
import { FaBook, FaUsers, FaChartBar, FaCloudUploadAlt } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <FaBook className="text-4xl text-green-600" />,
      title: "Catalog Management",
      description: "Easily organize and track your entire library collection."
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: "Patron Management",
      description: "Efficiently manage member records and borrowing history."
    },
    {
      icon: <FaChartBar className="text-4xl text-green-600" />,
      title: "Analytics Dashboard",
      description: "Gain insights with powerful reporting and analytics tools."
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl text-green-600" />,
      title: "Cloud-Based Solution",
      description: "Access your library system securely from anywhere, anytime."
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;