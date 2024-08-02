import login_image from '../assets/images/Rectangle 9593.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
    const [ showPassword, setShowPassword ] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    

    return (
        <div>
            {/* for Desktop view */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-36 h-screen my-20 gap-28">
                <div className='w-1/3'>
                    <h1 className="text-[40px] text-[#4285F3] ">LOGO</h1>
                    <h2 className="text-[30px] font-semibold mt-4 mb-3">Log In To Your Account</h2>
                    <p className="text-[#5C635A]">Welcome Back! Select a method to log in:</p>
                    
                    <div className='flex justify-between items-center my-4'>
                        <button className="bg-gradient-to-r from-[#E4E4E4] to-white  px-8 py-3 rounded-lg mt-4 flex items-center justify-center gap-2 shadow-lg">
                            <FcGoogle />
                            Google
                        </button>
                        <button className="bg-[#156BCA] text-white px-8 py-3 rounded-lg mt-4 flex items-center justify-center gap-2 shadow-lg">
                            <FaFacebookF />
                            Facebook
                        </button>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-sm mt-4'>
                        <hr className='w-[30%] border border-gray-200'/>
                        <p>Or Continue with Email</p>
                        <hr className='w-[30%] border border-gray-200'/>
                    </div>

                    <div className='mt-6'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-2 mb-4">
                            <label htmlFor="email" className="font-semibold text-md">Email</label>
                            <input type="text" id="email" placeholder="Enter your email" 
                                className="border p-2.5 placeholder:text-[#5C635A] rounded-lg  "
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="flex flex-col gap-2 mb-4 relative">
                            <label htmlFor="password" className="font-semibold text-md">Password</label>
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="@username" 
                                className="border p-2.5 placeholder:text-[#5C635A] rounded-lg  "
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-600">Password is required</span>}

                            {/* show password toggle button */}
                            <div className="absolute lg:right-4 top-11">
                                <button onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? 
                                    <BsEye /> :
                                    <AiOutlineEyeInvisible />
                                }
                            </button>
                            </div>
                            <div className='flex items-center justify-between text-sm mt-2'>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="terms" />
                                    <label htmlFor="terms" className="text-[#5C635A]"><a href="/sign-up" className="text-[#4285F3] ">Remember me</a></label>
                                </div>
                                <p className='text-[#4285F3] underline'>
                                    <Link>Forgot password?</Link>
                                </p>
                            </div>

                            <div className="mt-8 mb-5 flex items-center justify-center">
                            <button className="bg-[#4285F3] py-3 rounded-lg text-white px-24 font-semibold">Sign in</button>
                        </div>
                        </div>
                        </form>
                        <div className="flex items-center justify-center">
                        <p>
                            Don't Have an Account? {"  "}
                            <Link to="/sign-up" className="text-[#156BCA] font-semibold underline">Sign up</Link>
                        </p>
                    </div>
                    </div>
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