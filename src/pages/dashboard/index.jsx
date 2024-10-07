import React from "react";
import construction from "../../assets/images/construction.png";

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-title">Overview</h2>
      <div className="h-full flex flex-col justify-center align-middle items-center">
        <h1 className="text-5xl font-bold text-gray-800">
          All pages under construction
        </h1>
        {/* <MdConstruction size={200} className='text-gray-800'/> */}
        <img src={construction} alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
