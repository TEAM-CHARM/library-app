/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SummaryCard = ({ title, number, percentage, path }) => {
  return (
    <Link
      to={path}
      className="rounded-xl shadow-md hover:shadow-lg bg-white p-6 flex flex-col gap-y-6 border border-gray-200"
    >
      <h4 className="text-gray-500 text-sm text-lg font-semibold">{title}</h4>
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-semibold text-gray-600">{number}</h2>
        <span
          className={`${
            percentage < 0
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          } px-3 py-1 rounded-full text-sm font-medium`}
        >
          {percentage}%
        </span>
      </div>
    </Link>
  );
};

export default SummaryCard;
