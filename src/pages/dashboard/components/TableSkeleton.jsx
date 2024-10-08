import React from "react";
import "../dashboard.css";

const rows = [1, 2, 3, 4, 5, ];
const TableSkeleton = () => {
  return (
    <table className="min-w-full bg-white border-2 border-primary-light rounded-xl shadow-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">ISBN</th>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Author</th>
          <th className="border px-4 py-2">Genre</th>
          <th className="border px-4 py-2">Year</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, index) => {
          return (
            <tr key={index} className="animate-pulse">
              <td className="border px-4 py-2">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="border px-4 py-2">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="border px-4 py-2">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="border px-4 py-2">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="border px-4 py-2">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="border px-4 py-2 flex space-x-2 justify-center">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableSkeleton;
