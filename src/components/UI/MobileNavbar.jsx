import { useContext, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import "./MobileNavbar.css";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { TbHelpSquare } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const MobileNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="block lg:hidden">
      <div className="flex justify-between items-center px-5 py-3">
        <h1
          style={{ fontFamily: "Poor Richard" }}
          className="text-[24px] lg:text-[40px] text-[#4285F3] text-center"
        >
          LOGO
        </h1>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center">
            <IoMdNotificationsOutline className="text-xl" />
          </div>

          <div
            className="border w-9 h-9 rounded-full flex items-center justify-center"
            onClick={toggleDrawer}
          >
            <HiMenuAlt3 className="text-xl" />
          </div>
        </div>
      </div>

      {isDrawerOpen && <Drawer toggleDrawer={toggleDrawer} />}
    </div>
  );
};

const Drawer = ({ toggleDrawer }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer-overlay " onClick={toggleDrawer}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <button className="close-drawer" onClick={toggleDrawer}>
          &times;
        </button>
        <div className="drawer-content">
          <div className="bg-blue-700 pt-32 pb-20 h-[300px] relative">
            <div className="flex items-center flex-col justify-end gap-4">
              <div>
                <img
                  src={user?.photoURL || ""}
                  alt=""
                  className="w-20 h-20 rounded-full absolute right-6"
                />
              </div>
              <div className="flex-col justify-end absolute right-6 bottom-14">
                <div className="flex-col items-center justify-between">
                  <p className="font-semibold text-[20px] text-white">{user?.displayName}</p>
                  {/* <RiArrowDropDownLine className=" font-light" /> */}
                </div>
                <p className="text-[+#5C635A] text-sm">{user?.email}</p>
              </div>
            </div>
          </div>

          <nav className="py-8 flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${
                  isActive ? "bg-[#D4E9FF] border-l-4 border-l-blue-900   " : ""
                }`
              }
            >
              <RxDashboard className="shrink-0" />
              <span>Home</span>
            </NavLink>
            {/* <NavLink
          to="/new-listing"
          className={({ isActive }) =>
            `py-3 rounded-md transition-all flex items-center gap-2 ${
              isActive ? "bg-[#D4E9FF]px-6" : "px-6"
            }`
          }
        >
          <LuUsers2 className="shrink-0" />
          <span>New Listing</span>
        </NavLink> */}
            <NavLink
              to="/new-listing"
              className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${
                  isActive ? "bg-[#D4E9FF] border-l-4 border-l-blue-900  " : ""
                }`
              }
            >
              <LuUsers2 className="shrink-0" />
              <span>New Listing</span>
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${
                  isActive ? "bg-[#D4E9FF] border-l-4 border-l-blue-900  " : ""
                }`
              }
            >
              <CiSearch className="shrink-0" />
              <span>Search</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${
                  isActive ? "bg-[#D4E9FF] border-l-4 border-l-blue-900 " : ""
                }`
              }
            >
              <FaRegFileAlt className="shrink-0" />
              <span>About</span>
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${
                  isActive ? "bg-[#D4E9FF] border-l-4 border-l-blue-900 " : ""
                }`
              }
            >
              <CiHeart className="shrink-0" />
              <span>Favorites</span>
            </NavLink>

            <hr className="mx-6" />

            <NavLink
              to="/help-center"
              className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${
                  isActive ? "bg-[#D4E9FF] border-l-4 border-l-blue-900 " : ""
                }`
              }
            >
              <TbHelpSquare className="shrink-0" />
              <span>Help Center</span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${
                  isActive ? "bg-[#D4E9FF] border-l-4 border-l-blue-900 " : ""
                }`
              }
            >
              <IoSettingsOutline className="shrink-0" />
              <span>Settings</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
