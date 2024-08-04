import login_image from '../assets/images/Rectangle 9593.png';
import LoginForm from '../components/shared/LoginForm';
import bg_img from '../../src/assets/images/iPhone 14 & 15 Pro Max - 6.png';



const Login = () => {
    

    return (
        <div>
            {/* for Mobile view */}
            <div className="md:hidden " style={{backgroundImage: `url(${bg_img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh'}}
            >
                <div className="">
                    <h1 style={{fontFamily: "Poor Richard"}} className="text-[40px] text-[#4285F3] text-center pt-12 pb-4">LOGO</h1>
                    <p className="text-[#D1D1D1] text-[18px] font-[600] text-center pb-4">
                        Sign In to view all the <br /> massage therapists
                    </p>

                    <div className={` px-4 bg-white pt-8 pb-5 rounded-t-[50px] mt-8 `} >
                    
                    <LoginForm />
                </div>
                
                
                </div>
            </div>
            {/* for Desktop view */}
            <div className="hidden md:flex md:flex-row lg:items-center lg:justify-between lg:px-36 h-screen my-20 gap-28">
                <div className='w-1/3'>
                    <LoginForm />
                </div>
                <div className="relative">
                    <div>
                        <img src={login_image} alt="" className="h-[802px]"/>
                    </div>
                    <div className="bg-[#152A16] px-8 py-6 rounded-lg text-center absolute top-[42%] right-[175px] text-[22px] font-['Poppins', sans-serif]">
                        <p className="text-white "><span className="text-[#156BCA] font-semibold">Sign In</span> to view all the <br />massage therapists</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;