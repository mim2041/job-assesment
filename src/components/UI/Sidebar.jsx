import React from 'react';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { FaRegFileAlt } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuUsers2 } from 'react-icons/lu';
import { RxDashboard } from 'react-icons/rx';
import { TbHelpSquare } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='border sticky top-0 left-0 overflow-auto py-12 col-span-2'>
            <h1 style={{fontFamily: "Poor Richard"}} className="text-[40px] text-[#4285F3] text-center">LOGO</h1>

            <nav className='py-8 flex flex-col'>
                <NavLink to="/" className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${isActive ? 'bg-[#D4E9FF] border-l-2 border-l-blue-900   ' : ''}`
                }>
                    <RxDashboard className='shrink-0'/>
                    <span
                    >Home</span>
                </NavLink>
                <NavLink to="/new-listing" className={({ isActive }) =>
                `py-3 rounded-md transition-all flex items-center gap-2 ${isActive ? 'bg-[#D4E9FF]px-6' : 'px-6'}`
                }>
                    <LuUsers2 className='shrink-0'/>
                    <span
                    >New Listing</span>
                </NavLink>
                <NavLink to="/search" className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${isActive ? 'bg-[#D4E9FF] border-l-2 border-l-blue-900  ' : ''}`
                }>
                    <CiSearch className='shrink-0'/>
                    <span
                    >Search</span>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${isActive ? 'bg-[#D4E9FF] border-l-2 border-l-blue-900 ' : ''}`
                }>
                    <FaRegFileAlt className='shrink-0'/>
                    <span
                    >About</span>
                </NavLink>
                <NavLink to="/favorites" className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${isActive ? 'bg-[#D4E9FF] border-l-2 border-l-blue-900 ' : ''}`
                }>
                    <CiHeart className='shrink-0'/>
                    <span
                    >Favorites</span>
                </NavLink>

                <hr className='mx-6'/>
                
                <NavLink to="/help-center" className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${isActive ? 'bg-[#D4E9FF] border-l-2 border-l-blue-900 ' : ''}`
                }>
                    <TbHelpSquare className='shrink-0'/>
                    <span
                    >Help Center</span>
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) =>
                `py-3 transition-all flex items-center gap-2 px-6 ${isActive ? 'bg-[#D4E9FF] border-l-2 border-l-blue-900 ' : ''}`
                }>
                    <IoSettingsOutline className='shrink-0'/>
                    <span
                    >Settings</span>
                </NavLink>
                
            </nav>
        </div>
    );
};

export default Sidebar;