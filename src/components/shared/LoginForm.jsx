import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1
        style={{ fontFamily: "Poor Richard" }}
        className="text-[40px] text-[#4285F3] hidden md:block"
      >
        LOGO
      </h1>
      <h2 className="text-[30px] text-center md:text-left font-semibold mt-4 mb-3">
        Log In To Your Account
      </h2>
      <p className="text-[#5C635A] text-center md:text-left mb-8 md:mb-0">
        Welcome Back! Select a method to log in:
      </p>
      <SocialLogin />
      <div className="flex items-center justify-center gap-2 text-sm mt-6">
        <hr className="w-[30%] border border-gray-200" />
        <p>Or Continue with Email</p>
        <hr className="w-[30%] border border-gray-200" />
      </div>

      <div className="mt-12 md:mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email" className="font-semibold text-md">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border p-2.5 placeholder:text-[#5C635A] rounded-lg  "
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="flex flex-col gap-2 mb-4 relative">
            <label htmlFor="password" className="font-semibold text-md">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="@username"
              className="border p-2.5 placeholder:text-[#5C635A] rounded-lg  "
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}

            {/* show password toggle button */}
            <div className="absolute right-4 top-11">
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BsEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-[#5C635A]">
                  <a href="/sign-up" className="text-[#4285F3] ">
                    Remember me
                  </a>
                </label>
              </div>
              <p className="text-[#4285F3] underline">
                <Link>Forgot password?</Link>
              </p>
            </div>

            <div className="mt-12 md:mt-8 md:mb-5 flex items-center justify-center">
              <button className="bg-[#4285F3] py-3 rounded-lg text-white px-24 font-semibold">
                Sign in
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center justify-center mb-5 lg:mb-0">
          <p>
            Don't Have an Account? {"  "}
            <Link
              to="/sign-up"
              className="text-[#156BCA] font-semibold underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
