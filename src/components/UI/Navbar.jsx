import { RiArrowDropDownLine } from 'react-icons/ri';
import profile from '../../assets/images/Group 12867.png';
import { IoIosLogOut, IoMdNotificationsOutline } from 'react-icons/io';
import logout from "../../assets/images/Group 1000001685.png";


const Navbar = () => {
    return (
        <div className='h-20  px-8 py-5 flex items-center justify-between border-b'>
            <div className='flex items-center justify-center gap-4'>
                <div>
                    <img src={profile} alt="" className='w-12 h-12 rounded-full'/>
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold'>Sagar soni</p>
                        <RiArrowDropDownLine className=' font-light'/>
                    </div>
                    <p className='text-[+#5C635A] text-sm'>Suraiyamim338@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='border w-9 h-9 rounded-full flex items-center justify-center'>
                    <IoMdNotificationsOutline className='text-xl'/>
                </div>
                <button className='border-l-2 text-[#F15E4A] font-semibold px-6 py- flex items-center gap-2'>
                    Log Out
                    <img src={logout} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;