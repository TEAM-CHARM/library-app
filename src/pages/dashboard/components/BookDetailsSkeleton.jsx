import React from "react";

const BookDetailsSkeleton = () => {
  return (
    <div>
      <div className="flex justify-between items-center align-middle">
        <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-24 h-10 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="grid grid-cols-3 min-h-[400px] mt-10 gap-6">
        <div className="book-image w-full col-span-1 flex justify-center">
          <div className="w-48 h-64 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="col-span-2 space-y-4">
          <div className="w-3/4 h-8 bg-gray-300 animate-pulse rounded"></div>
          <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded"></div>
          <div className="w-1/4 h-6 bg-gray-300 animate-pulse rounded"></div>
          <div className="w-full h-20 bg-gray-300 animate-pulse rounded"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="w-3/4 h-6 bg-gray-300 animate-pulse rounded"></div>
              <div className="w-2/4 h-6 bg-gray-300 animate-pulse rounded"></div>
              <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="w-3/4 h-6 bg-gray-300 animate-pulse rounded"></div>
              <div className="w-2/4 h-6 bg-gray-300 animate-pulse rounded"></div>
              <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsSkeleton;
