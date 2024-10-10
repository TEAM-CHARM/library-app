import React from 'react';

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Plans for Library Owners</h2>
      <p className="text-center text-gray-600 mb-16">
        Manage your library effortlessly with tailored plans that suit your library’s needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Starter</h3>
          <p className="text-gray-500 mb-6">For small libraries with basic needs</p>
          <div className="text-4xl font-bold mb-4">$50</div>
          <p className="text-gray-600 mb-6">per month</p>
          <ul className="text-left mb-6">
            <li className="mb-2">✔ Catalog up to 1,000 books</li>
            <li className="mb-2">✔ Basic user management</li>
            <li className="mb-2">✔ Email support</li>
            <li className="mb-2">✔ Generate basic usage reports</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Professional Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Professional</h3>
          <p className="text-gray-500 mb-6">For growing libraries with advanced needs</p>
          <div className="text-4xl font-bold mb-4">$150</div>
          <p className="text-gray-600 mb-6">per month</p>
          <ul className="text-left mb-6">
            <li className="mb-2">✔ Catalog up to 10,000 books</li>
            <li className="mb-2">✔ Advanced user and membership management</li>
            <li className="mb-2">✔ Email and chat support</li>
            <li className="mb-2">✔ Generate detailed reports & analytics</li>
            <li className="mb-2">✔ Integration with third-party tools</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
          <p className="text-gray-500 mb-6">For large libraries or institutions</p>
          <div className="text-4xl font-bold mb-4">$300</div>
          <p className="text-gray-600 mb-6">per month</p>
          <ul className="text-left mb-6">
            <li className="mb-2">✔ Unlimited book cataloging</li>
            <li className="mb-2">✔ Dedicated account manager</li>
            <li className="mb-2">✔ 24/7 priority support</li>
            <li className="mb-2">✔ Custom integrations and API access</li>
            <li className="mb-2">✔ Advanced reporting and analytics</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
