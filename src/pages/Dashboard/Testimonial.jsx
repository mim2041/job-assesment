import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import CustomSwiper from "../../components/shared/CustomSwiper";
import { SwiperSlide } from "swiper/react";

const Testimonial = () => {
    const [ data, setData ] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => {
                console.log(data?.reviews);
                setData(data?.reviews);
            })
            .catch((error) => console.log('Error fetching data: ', error))
    } ,[]);


    return (
        <div className="w-full ">
            <h3 className='text-[18px] font-[500px] mb-2'>Featured Testimonial</h3>
            <CustomSwiper
                pagination
                onSlideChange={() => console.log("slide change")}
                spaceBetween={24}
                slidesPerView={2}
            >
                <div className="bg-white p-6 flex flex-col gap-6 rounded-lg ">
                {
                    data?.map((review) => (
                        <SwiperSlide key={review?.id} className="flex gap-4 border rounded-lg p-2 items-center bg-white">
                            <img src={review?.image} alt={review?.name} />
                            <div>
                                <p className="text-gray-600 flex items-center mb-2 text-[13px]">
                                    <MdLocationPin className="" />
                                    {review?.address}
                                </p>
                                <p className="text-[14px] font-[500]">{review?.service} <span className="text-[#156BCA]">by {review.agent}</span></p>
                                <p className="font-[400] text-[13px] mt-2.5">{review?.review.slice(0,150)}...<span className="text-[#156BCA] underline font-[500]">Read More</span></p>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </div>
            </CustomSwiper>
        </div>
    );
};

export default Testimonial;