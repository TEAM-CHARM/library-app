import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import K from "../constants";
import { useEffect, useState } from "react";

const SideNav = () => {
  const [user, setUser] = useState({});
  const location = useLocation();
  const { pathname } = location;
  const getUser = async () => {
    if (window.localStorage.getItem("librariumUser")) {
      setUser(JSON.parse(window.localStorage.getItem("librariumUser")));
    } else {
      setUser(K.USER);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="h-full bg-[#F4F4F4] border-2 border-primary-light rounded-xl shadow-xl p-6 flex flex-col gap-10">
      <div className="logo flex flex-col justify-center items-center gap-4">
        <Link
          to="/dashboard"
          id="logo"
          className="flex flex-col items-center align-middle justify-center"
        >
          <img src={logo} alt="Logo" width={70} />
          <h2 className="text-lg font-semibold text-[#00B9BE]">
            The Librarium
          </h2>
        </Link>
        <hr className="border-1 w-full border-gray-300" />
      </div>
      <div className="nav-links flex flex-col gap-4">
        {K.NAVLINKS.map((link, index) => {
          const LinkIcon = link.icon;

          return (
            <Link
              to={link.path}
              key={index}
              className={`flex gap-4 items-center align-middle rounded-full hover:bg-gray-200 text-gray-500 ${
                pathname === link.path &&
                "bg-primary-dark !text-white hover:bg-primary-dark"
              } p-2 pl-4 text-md `}
            >
              <LinkIcon size={25} />
              <p>{link.link}</p>
            </Link>
          );
        })}
      </div>
      <div className="nav-bottom w-full mt-auto flex flex-col justify-center align-middle items-center gap-4">
        <div className="profile-image rounded-full w-[50px] h-[50px]">
          <img
            src={logo}
            alt=""
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="profile-info flex flex-col w-full text-center">
          <p className="text-gray-700 text-sm">
            {user.firstName} {user.lastName}
          </p>
          <small className="text-gray-500 text-xs">{user.email}</small>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
