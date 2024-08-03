import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const LoginForm = () => {
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
                                <label htmlFor="terms" className="text-[#5C635A]"><a href="/sign-up" className="text-[#4285F3] ">Remember me</a>
                                </label>
                        </div>
                        <p className='text-[#4285F3] underline'>
                            <Link>Forgot password?</Link>
                        </p>
                    </div>

                    <div className="mt-8 mb-5 flex items-center justify-center">
                        <button className="bg-[#4285F3] py-3 rounded-lg text-white px-24 font-semibold">
                            Sign in
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;