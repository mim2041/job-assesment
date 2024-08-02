import { Swiper as SwiperComponent } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";


const CustomSwiper = ({
  children,
  onSlideChange,
  spaceBetween,
  slidesPerView,
  pagination,
}) => {

  return (
    <SwiperComponent
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={pagination}
      onSlideChange={onSlideChange}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
    >
      {children}
    </SwiperComponent>
  );
};

export default CustomSwiper;
