import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };

      console.log(userInfo);
      //   axiosPublic.post("/users", userInfo).then((res) => {
      //     console.log(res.data);
      //     navigate("/");
      //   });
      navigate("/");
    });
  };
  return (
    <div>
      <div className="flex justify-center md:justify-between gap-8 items-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="bg-gradient-to-r from-[#E4E4E4] to-white  px-8 py-3 rounded-lg mt-4 flex items-center justify-center gap-2 shadow-lg text-[16px] font-[400]"
        >
          <FcGoogle />
          Google
        </button>
        <button className="bg-[#156BCA] text-white px-8 py-3 rounded-lg mt-4 flex items-center justify-center gap-2 shadow-lg">
          <FaFacebookF />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
