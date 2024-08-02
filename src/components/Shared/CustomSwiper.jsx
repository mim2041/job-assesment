import Image from "next/image";
import {
  Swiper as SwiperComponent,
  SwiperSlide,
  useSwiper,
} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React, { ReactNode } from "react";
import { Swiper } from "swiper/types";


const CustomSwiper = ({
  children,
  navigation,
  onSlideChange,
  spaceBetween,
  onClick,
  slidesPerView,
  paginationProps,
}) => {
  const swiper = useSwiper();

  return (
    <SwiperComponent
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={navigation}
      pagination={
        paginationProps
          ? {
              clickable: paginationProps.clickable ?? true,
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: ${
                  paginationProps.color ?? "#7214FF"
                }"></span>`;
              },
              el: paginationProps.position
                ? `.${paginationProps.position}-pagination`
                : undefined,
            }
          : false
      }
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={onSlideChange}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
    >
      {children}
    </SwiperComponent>
  );
};

export default CustomSwiper;
