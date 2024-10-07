import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const DashboardLayout = () => {
  return (
    <div className="main-body h-screen flex bg-[#E3E4E4] p-5">
      {/* Side Navigation */}
      <div className="w-64 fixed top-0 left-0 h-full overflow-auto p-4 bg-[#E3E4E4]">
        <SideNav />
      </div>

      {/* Main Views */}
      <div className="ml-64 w-full h-full max-h-screen overflow-auto bg-[#E3E4E4]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
