import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pricingInfo = [
  {
    title:"Starter", 
    description:"For small libraries with basic needs",
    price:50,
    duration: "/month",
    features:["Catalog up to 1,000 books", "Basic user management", "Email support", "Generate basic usage reports"]
  },
  {
    title:"Professional",
    description:"For growing libraries with advanced needs",
    price:150,
    duration: "/month",
    features: ["Catalog up to 10,000 books","Advanced user and membership management","Email and chat support", "Generate detailed reports & analytics", "Integration with third-party tools"]
  },
  {
    title:"Enterprise",
    description:"For large libraries or institutions",
    price:300,
    duration:"/month",
    features:["Unlimited book cataloging","Dedicated account manager", "24/7 priority support","Custom integrations and API access", "Advanced reporting and analytics"]
  }
]

const Pricing = () => {
  // State to track the currently active or hovered plan
  const [activePlan, setActivePlan] = useState('Starter');

  const navigate = useNavigate()

  return (
    <section id='pricing-section' className="container mx-auto px-4 py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-secondary-light mb-12">Plans for Library Owners</h2>
      <p className="text-center text-gray-600 mb-16">
        Manage your library effortlessly with tailored plans that suit your library's needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Starter Plan */}

        {pricingInfo.map((info, index)=>{
          return(
            <div
            key={index}
          onMouseEnter={() => setActivePlan(info.title)}
          className={`relative bg-white rounded-lg p-6 text-center border cursor-pointer transition-shadow duration-300 ${
            activePlan === info.title ? 'ring-4 ring-secondary-light shadow-lg' : 'border-gray-200'
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4">{info.title}</h3>
          <p className="text-gray-500 mb-6">{info.description}</p>
          <div className="text-4xl font-bold mb-4">${info.price}</div>
          <p className="text-gray-600 mb-6">per {info.duration}</p>
          <ul className="text-left mb-6">
            {info.features.map((feature, index)=>{
           return <li key={index} className="mb-2">✔ {feature}</li>
            }
          )}
            
          </ul>
          <button onClick={()=>navigate("/register")} className="w-full bg-secondary-light text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">
            Get Started
          </button >
        </div>
          )
        })}
      </div>
    </section>
  );
};

export default Pricing;
