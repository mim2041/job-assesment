import { useEffect, useState } from "react";

import VerticalSwiper from "../../components/Swaper/VerticalSwiper";

const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.reviews);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  return (
    <div className="w-full ">
      <h3 className="text-[18px] font-[500px] mb-2">Featured Testimonial</h3>

      <VerticalSwiper reviews={data} />
    </div>
  );
};

export default Testimonials;
