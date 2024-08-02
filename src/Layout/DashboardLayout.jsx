import Navbar from '../components/UI/Navbar';
import Sidebar from '../components/UI/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='grid grid-cols-12'>
            <Sidebar />
            <div className='col-span-10 h-[200vh] bg-[#EEF2F5]'>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;