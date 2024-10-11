import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

import PageHeader from "../components/PageHeader";
import PrimaryButton from "../components/PrimaryButton";

const Members = () => {
  return (
    <div className="overflow-hidden pb-6">
      <PageHeader title="Members" searchPlaceholder="Search members..." />
      <div className="flex w-full flex-col h-full justify-center align-middle items-center mt-32 gap-9">
        <h1 className="section-header text-4xl text-gray-500">No Members yet!</h1>
        <PrimaryButton text="Add Members" icon={<AiOutlineUsergroupAdd/>} onClick={()=>console.log("button Clicked")} />
      </div>
    </div>
  );
};

export default Members;
