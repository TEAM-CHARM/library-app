/* eslint-disable react/prop-types */

const PrimaryButton = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-3 bg-primary-dark hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
    >
      {icon && <span className="text-xl">{icon}</span>}
      {text}
    </button>
  );
};

export default PrimaryButton;
