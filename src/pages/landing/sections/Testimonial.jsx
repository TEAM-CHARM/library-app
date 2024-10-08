import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ quote, author, role }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <FaQuoteLeft className="text-2xl text-green-600 mb-4" />
    <p className="text-gray-600 mb-4">{quote}</p>
    <p className="font-semibold">{author}</p>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This app has revolutionized how we manage our library. It's user-friendly and packed with features!",
      author: "Sarah Johnson",
      role: "Head Librarian, City Public Library"
    },
    {
      quote: "The analytics tools have helped us make data-driven decisions to better serve our community.",
      author: "Michael Chen",
      role: "Director, University Library"
    },
    {
      quote: "Excellent customer support and regular updates. It's clear they really care about their users.",
      author: "Emily Rodriguez",
      role: "Librarian, High School Library"
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;