import { CiLocationOn } from "react-icons/ci";
import testimonialImg from '../../assets/images/image 116.png';
import { FaLocationDot } from "react-icons/fa6";

const Testimonial = ({ reviewPair }) => {
  return (
    <div className="bg-white px-3 md:px-6 pt-3 md:pt-7 pb-12 rounded-lg">
      <div className="flex flex-col space-y-4">
        {reviewPair.map((review, i) => (
          <div key={i} className="flex flex-col">
            <div className="grid grid-cols-[3fr,9fr] items-center gap-3 border border-gray-300 rounded-lg bg-white p-3">
              <img src={review.image} alt="profile" className="w-[130px] h-[140px]" />
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <p className="text-[13px]">{review?.address}</p>
                </div>
                <h4 className="text-[13px] md:text-14 font-[500px]">
                  {review?.name} by{" "}
                  <span className="text-blue-500">{review?.service}</span>
                </h4>
                <p className="text-[13px] md:text-[14px] text-[#7E7E7E]">{review?.company}</p>
                <p className="text-[11px] md:text-[13px] text-justify">
                  {review?.review}...<span className="text-[#156BCA] underline font-[500]">Read More</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
