import SidebarItems from "../shared/SidebarItems";


const Sidebar = () => {
  return (
    <div>
      <div className="border hidden md:block sticky top-0 left-0 overflow-auto py-12 col-span-2">
      <h1
        style={{ fontFamily: "Poor Richard" }}
        className="text-[40px] text-[#4285F3] text-center"
      >
        LOGO
      </h1>

      
      <SidebarItems />
    </div>

    {/* mobile */}
    <div>

    </div>
    </div>
  );
};

export default Sidebar;
