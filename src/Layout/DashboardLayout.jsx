import MobileNavbar from "../components/UI/MobileNavbar";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div
      className="grid   
 lg:grid-cols-12 h-screen"
    >
      <Sidebar className="fixed left-0 top-0 h-full " />
      <div className="col-span-10 overflow-y-auto lg:bg-[#EEF2F5]">
        <Navbar />
        <MobileNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
