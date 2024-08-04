import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles/Therapist.css";
import { MdLocationPin } from "react-icons/md";
import { FaCar } from "react-icons/fa";

const FeaturedTherapist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/therapist.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.therapists);
        setData(data?.therapists);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  if (data.length == 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-6">
      <h3 className="text-[18px] font-[500px] mb-2">Featured Therapist</h3>

      <div className="bg-white p-6 rounded-lg swiper-container ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="custom-swiper"
        >
          {data?.map((therapist, i) => (
            <SwiperSlide key={i} className="">
              <div className="card bg-white rounded-lg mx-4 relative text-left shadow-lg">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="card-image w-full h-40 object-cover rounded-lg mb-4 mx-auto"
                />
                <h4 className="text-lg font-semibold mb-2 ml-2">
                  {therapist.name}
                </h4>
                <p className="text-gray-600 flex items-center mb-2 text-sm ml-2">
                  <MdLocationPin className="" />
                  {therapist.address}
                </p>
                <p className="text-gray-600 flex items-center gap-2 ml-2 text-sm mb-12">
                  <FaCar className="" />
                  Mobile & In-Studio
                </p>
                <button className="bg-[#D4E9FF] hover:bg-[#156BCA] text-black hover:text-white py-2 px-4 rounded-b-lg   transition-all underline w-full absolute bottom-0 right-0">
                  See Details
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next custom-swiper-button"></div>
        <div className="swiper-button-prev custom-swiper-button"></div>
      </div>
    </div>
  );
};

export default FeaturedTherapist;
