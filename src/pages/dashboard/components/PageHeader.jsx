/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import K from "../../../constants";
import PrimaryButton from "./PrimaryButton";
import { useEffect, useState } from "react";

const PageHeader = ({
  title,
  searchPlaceholder,
  buttonText,
  buttonIcon,
  onClick,
  onChange
}) => {

  const [user, setUser] = useState({})

  const getUser = async()=>{
    if(window.localStorage.getItem("librariumUser")){
      setUser(JSON.parse(window.localStorage.getItem("librariumUser")))
    }else{
      setUser(K.USER)
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <div className="mb-10">
      <div className="flex align-middle mb-4 justify-between items-center">
        <h2 className="page-title">{title}</h2>

        <div className="nav-bottom flex justify-center align-middle items-center gap-2">
          {/* <div className="profile-image rounded-full w-[60px] h-[40px]">
            <img
              src={user?.profile?.profilePicture}
              alt=""
              className="rounded-full w-full h-full object-cover"
            />
          </div> */}
          <div className="profile-info flex flex-col w-full ">
            <p className="text-gray-700 font-bold text-lg">{user.libraryName}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-20 align-middle ">
        <SearchBar placeholder={searchPlaceholder} onChange={onChange} />
        {buttonText ? (
          <PrimaryButton
            text={buttonText}
            icon={buttonIcon}
            onClick={onClick}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PageHeader;
