import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);
  const onSubmit = (data) => {
    // password validation
    if (data.password !== data.confirm_password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password did not match",
      });
      return;
    }
    setIsLoader(true);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.displayName, data?.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.displayName,
            email: data.email,
          };
          console.log(userInfo);
          reset();
          setIsLoader(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          setIsLoader(false);
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        });
    });
  };

  // handle accept term and condition

  const [terms, setTerms] = useState(false);
  const handleAcceptTerms = () => {
    const terms = document.getElementById("terms");
    if (terms.checked) {
      console.log("Terms Accepted");
      setTerms(true);
    } else {
      console.log("Please accept the terms");
      setTerms(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className="font-semibold text-md">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className="border p-2.5 placeholder:text-[#5C635A] rounded-lg  "
            {...register("displayName", { required: true })}
          />
          {errors.displayName && (
            <span className="text-red-600">User Name is required</span>
          )}
        </div>
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
            placeholder="*******"
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
        </div>
        <div className="flex flex-col gap-2 mb-4 relative">
          <label htmlFor="confirm_password" className="font-semibold text-md">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm_password"
            placeholder="Re-type password"
            className="border p-2.5 placeholder:text-[#5C635A] rounded-lg  "
            {...register("confirm_password", { required: true })}
          />
          {errors.confirm_password && (
            <span className="text-red-600">Password did not match</span>
          )}

          {/* show password toggle button */}
          <div className="absolute right-4 top-11">
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <BsEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="terms" onClick={handleAcceptTerms} />
          <label htmlFor="terms" className="text-[#5C635A]">
            Accept Terms of Service
          </label>
        </div>
        <div className="mt-8 mb-3 md:mb-5 flex items-center justify-center">
          {isLoader ? (
            <button
              type="submit"
              className="bg-[#156BCA] text-white w-full py-3 rounded-lg"
              disabled
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className={`bg-[#156BCA] text-white w-full py-3 rounded-lg ${
                terms ? "cursor-pointer" : "disabled:true cursor-not-allowed"
              }`}
            >
              Sign Up
            </button>
          )}
        </div>
      </form>
      <div className="flex items-center justify-center">
        <p>
          Already Have an Account? {"  "}
          <Link to="/login" className="text-[#156BCA] font-semibold underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
