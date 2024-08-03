import signup_image from "../assets/images/Rectangle 9593.png";
import { Link } from "react-router-dom";
import SignUpForm from "../components/shared/SignUpForm";
import bg_img from '../../src/assets/images/iPhone 14 & 15 Pro Max - 6.png';

const SignUp = () => {
    

    return (
        <div>
            {/* mobile view */}
            <div className="md:hidden">

            </div>

            {/* web view */}
            <div className="hidden md:flex md:flex-row md:items-center md:justify-between lg:px-36 h-screen my-20 gap-28">
            <div className="">
                <h1 style={{fontFamily: "Poor Richard"}} className="text-[40px] text-[#4285F3] ">LOGO</h1>
                <h2 className="text-[30px] font-semibold mt-4 mb-3">Sign In To Your Account</h2>
                <p className="text-[#5C635A]">
                    Welcome Back! By click the sign up button, you're agree <br />to Zenitood Terms and Service and acknlowledge the <br />
                    <a href="/sign-up" className="text-[#4285F3] underline">Privacy and Policy</a>
                </p>

                <div className="my-5">
                    <SignUpForm />
                    <div className="flex items-center justify-center">
                        <p>
                            Already Have an Account? {"  "}
                            <Link to="/login" className="text-[#156BCA] font-semibold underline">Log in</Link>
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
        </div>
    );
};

export default SignUp;