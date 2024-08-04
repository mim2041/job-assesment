import assets from "../../assets";
import LoginForm from "../../components/shared/LoginForm";

const Login = () => {
  return (
    <div>
      {/* for Mobile view */}
      <div
        className="md:hidden "
        style={{
          backgroundImage: `url(${assets.images.login})`,
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
            className="text-[40px] text-[#4285F3] text-center pt-12 pb-4"
          >
            LOGO
          </h1>
          <p className="text-[#D1D1D1] text-[18px] font-[600] text-center pb-4">
            Sign In to view all the <br /> massage therapists
          </p>

          <div className={` px-4 bg-white pt-8 pb-5 rounded-t-[50px] mt-8 `}>
            <LoginForm />
          </div>
        </div>
      </div>
      {/* for Desktop view */}
      <div className="hidden md:flex md:flex-col lg:flex-row lg:items-center lg:justify-center lg:px-36  gap-20 py-5">
        <div className="w-1/3">
          <LoginForm />
        </div>
        <div className="relative">
          <div>
            <img src={assets?.images?.login} alt="" className="h-[600px]" />
          </div>
          <div className="bg-[#152A16] px-8 py-6 rounded-lg text-center absolute top-[42%] right-[175px] text-[22px] font-['Poppins', sans-serif]">
            <p className="text-white ">
              <span className="text-[#156BCA] font-semibold">Sign In</span> to
              view all the <br />
              massage therapists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
