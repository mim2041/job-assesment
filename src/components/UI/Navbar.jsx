import { RiArrowDropDownLine } from "react-icons/ri";
import profile from "../../assets/images/Group 12867.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import logout from "../../assets/images/Group 1000001685.png";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;

  console.log(user.reloadUserInfo);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="hidden lg:flex h-20  px-8 py-5  items-center justify-between border-b bg-white">
      <div className="flex items-center justify-center gap-4">
        <div>
          <img
            src={photoURL || profile}
            alt=""
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">{displayName}</p>
            <RiArrowDropDownLine className=" font-light" />
          </div>
          <p className="text-[+#5C635A] text-sm">{email}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="border w-9 h-9 rounded-full flex items-center justify-center">
          <IoMdNotificationsOutline className="text-xl" />
        </div>
        {user && (
          <>
            {/* <span>{user?.displayName}</span> */}
            <button
              onClick={handleLogOut}
              className="border-l-2 text-[#F15E4A] font-semibold px-6 py- flex items-center gap-2"
            >
              Log Out
              <img src={logout} alt="" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
