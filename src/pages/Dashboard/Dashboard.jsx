import FeaturedTherapist from "./FeaturedTherapist";
import PopularCities from "./PopularCities";
import Testimonial from "./Testimonial";
import TopSection from "./TopSection";

const Dashboard = () => {
    return (
        <div style={{fontFamily: 'Poppins, sans-serif'}} className='bg-[#EEF2F5] p-6 '>
            <TopSection />
            <FeaturedTherapist />
            <div className="flex gap-6">
                <div className="lg:w-1/2">
                    <Testimonial />
                </div>
                <div className="lg:w-1/2">
                    <PopularCities />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;