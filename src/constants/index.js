import { MdDashboard } from "react-icons/md";
import { FaProjectDiagram, FaTasks } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import profile from "../assets/images/profile.jpg";

const K = {
  USER: {
    name: "Albert Nartey",
    profilePic: profile,
    email: "albertnartey824@gmail.com",
  },
  NAVLINKS: [
    { icon: MdDashboard, link: "Dashboard", path: "/dashboard" },
    { icon: FaProjectDiagram, link: "Books", path: "/dashboard/projects" },
    { icon: FaTasks, link: "Members", path: "/dashboard/tasks" },
    // { icon: GrUserWorker, link: "Team", path: "/dashboard/team" },
    {
      icon: IoIosNotifications,
      link: "Notifications",
      path: "/dashboard/notifications",
    },
  ],
};

export default K;
