
import { useState } from "react";
import "./login.css";

import SignUpForm from "../../components/shared/SignUpForm";
import assets from "../../assets";

const SignUp = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* mobile view */}
      <div
        className="md:hidden "
        style={{
          backgroundImage: `url(${assets?.images?.bg_img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="">
          <h1
            style={{ fontFamily: "Poor Richard" }}
            className="text-[40px] text-[#4285F3] text-center pt-12"
          >
            LOGO
          </h1>
          <h2 className="text-[30px] font-semibold mt-4 mb-3 text-center">
            Sign In To Your Account
          </h2>
          <p className="text-[#D1D1D1] text-[16px] font-[400] text-center">
            Welcome Back! By click the sign up button, you're agree <br />
            to Zenitood Terms and Service and acknowledge the <br />
            <a href="/sign-up" className="text-[#4285F3] underline">
              Privacy and Policy
            </a>
          </p>

          {showForm ? (
            <div
              className={`form-container px-4 bg-white pt-10 pb-5 rounded-t-[50px] mt-12 ${
                showForm ? "form-show" : "form-hide"
              }`}
            >
              <p className="text-[28px] font-[600] mb-4 text-center">Sign Up</p>
              {showForm && <SignUpForm />}
            </div>
          ) : (
            <div className="bg-[#152A16] p-6 mx-12 my-16 rounded-lg text-center text-[22px] font-['Poppins', sans-serif]">
              <p
                onClick={() => setShowForm(!showForm)}
                className="text-[#156BCA] font-semibold cursor-pointer"
              >
                Create Account
              </p>
              <p className="text-white ">Fill in Your Information</p>
            </div>
          )}
        </div>
      </div>

      {/* web view */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between lg:px-36   gap-5">
        <div className="">
          <h1
            style={{ fontFamily: "Poor Richard" }}
            className="text-[40px] text-[#4285F3] "
          >
            LOGO
          </h1>
          <h2 className="text-[30px] font-semibold mt-4 mb-3">
            Sign In To Your Account
          </h2>
          <p className="text-[#5C635A]">
            Welcome Back! By click the sign up button, you're agree <br />
            to Zenitood Terms and Service and acknowledge the <br />
            <a href="/sign-up" className="text-[#4285F3] underline">
              Privacy and Policy
            </a>
          </p>

          <div className="my-5">
            <SignUpForm />
          </div>
        </div>

        <div className="relative">
          <div>
            <img src={assets?.images?.login} alt="" className="h-[600px]" />
          </div>
          <div className="bg-[#152A16] p-10 rounded-lg text-center absolute top-[42%] right-[100px] text-[22px] font-['Poppins', sans-serif]">
            <p className="text-[#156BCA] font-semibold">Create Account</p>
            <p className="text-white ">Fill in Your Information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
