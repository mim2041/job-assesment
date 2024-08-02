import { useForm } from "react-hook-form";
import signup_image from "../assets/images/Rectangle 9593.png";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const SignUp = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);

    return (
        <div className="flex items-center justify-between lg:px-36 h-screen my-20 gap-28">
            <div className="">
                <h1 className="text-[40px] text-[#4285F3] ">LOGO</h1>
                <h2 className="text-[30px] font-semibold mt-4 mb-3">Sign In To Your Account</h2>
                <p className="text-[#5C635A]">
                    Welcome Back! By click the sign up button, you're agree <br />to Zenitood Terms and Service and acknlowledge the <br />
                    <a href="/sign-up" className="text-[#4285F3] underline">Privacy and Policy</a>
                </p>

                <div className="my-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-2 mb-4">
                            <label htmlFor="name" className="font-semibold text-md">Name</label>
                            <input type="text" id="name" placeholder="@username" 
                                className="border p-2.5 placeholder:text-[#5C635A] rounded-lg  "
                                {...register("username", { required: true })}
                            />
                            {errors.username&& <span className="text-red-600">User Name is required</span>}
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <label htmlFor="name" className="font-semibold text-md">Email</label>
                            <input type="text" id="name" placeholder="Enter your email" 
                                className="border p-2.5 placeholder:text-[#5C635A] rounded-lg  "
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="flex flex-col gap-2 mb-4 relative">
                            <label htmlFor="name" className="font-semibold text-md">Password</label>
                            <input type={showPassword ? "text" : "password"} id="name" placeholder="@username" 
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

                        </div>
                        <div className="flex flex-col gap-2 mb-4 relative">
                            <label htmlFor="name" className="font-semibold text-md">Confirm Password</label>
                            <input type={showConfirmPassword ? "text" : "password"} id="name" placeholder="Re-type password" 
                                className="border p-2.5 placeholder:text-[#5C635A] rounded-lg  "
                                {...register("confirm_password", { required: true })}
                            />
                            {errors.confirm_password && <span className="text-red-600">Password did not match</span>}

                            {/* show password toggle button */}
                            <div className="absolute lg:right-4 top-11">
                                <button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {
                                    showConfirmPassword ? 
                                    <BsEye /> :
                                    <AiOutlineEyeInvisible /> 
                                }
                            </button>
                            </div>

                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms" className="text-[#5C635A]"><a href="/sign-up" className="text-[#4285F3] ">Accept Terms of Service</a></label>
                        </div>
                        <div className="mt-8 mb-5 flex items-center justify-center">
                            <button className="bg-[#4285F3] py-3 rounded-lg text-white px-24 font-semibold">Sign up</button>
                        </div>
                    </form>
                    <div className="flex items-center justify-center">
                        <p>
                            Already Have an Account? {"  "}
                            <a href="/sign-up" className="text-[#156BCA] font-semibold underline">Log in</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div>
                    <img src={signup_image} alt="" className="h-[802px]"/>
                </div>
                <div className="bg-[#152A16] p-10 rounded-lg text-center absolute top-[42%] right-[175px] text-[22px] font-['Poppins', sans-serif]">
                    <p className="text-[#156BCA] font-semibold">Create Account</p>
                    <p className="text-white ">Fill in Your Information</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;