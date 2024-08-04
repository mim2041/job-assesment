const Testimonial = ({ reviewPair }) => {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        {reviewPair.map((review, i) => (
          <div key={i} className="flex flex-col">
            <div className="grid grid-cols-[4fr,8fr] gap-3 border border-gray-300 rounded-lg bg-white p-3">
              <img src={review?.image} alt="profile" className=" md:w-full " />
              <div className="flex flex-col space-y-1">
                <p>{review?.address}</p>
                <h4 className="text-[18px] font-[500px]">{review?.name}</h4>
                <p className="text-[14px] text-[#7E7E7E]">
                  {review?.designation}
                </p>
                <p className="text-[14px] text-[#7E7E7E]">{review?.company}</p>

                <p className="text-[14px] text-justify">{review?.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
