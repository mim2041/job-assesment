import { CiLocationOn } from "react-icons/ci";

const Testimonial = ({ reviewPair }) => {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        {reviewPair.map((review, i) => (
          <div key={i} className="flex flex-col">
            <div className="grid grid-cols-[4fr,8fr] gap-3 border border-gray-300 rounded-lg bg-white p-3">
              <img src={review?.image} alt="profile" className="w-full " />
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2">
                  <CiLocationOn />
                  <p className="text-xs lg:text-[18px]">{review?.address}</p>
                </div>
                <h4 className="text-xs lg:text-sm font-[500px]">
                  {review?.name} by{" "}
                  <span className="text-blue-500">{review?.service}</span>
                </h4>
                <p className="text-[14px] text-[#7E7E7E]">{review?.company}</p>
                <p className="text-xs lg:text-[14px] text-justify">
                  {review?.review}
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
