import FeaturedTherapist from "./FeaturedTherapist";
import PopularCities from "./PopularCities";
import Testimonials from "./Testimonials";
import TopSection from "./TopSection";

const Dashboard = () => {
  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="bg-[#EEF2F5] lg:p-6 "
    >
      <TopSection />
      <FeaturedTherapist />
      <div className="lg:flex gap-6 m-2 lg:m-0">
        <div className="lg:w-1/2">
          <Testimonials />
        </div>
        <div className="lg:w-1/2">
          <PopularCities />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
