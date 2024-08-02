import FeaturedTherapist from "./FeaturedTherapist";
import TopSection from "./TopSection";

const Dashboard = () => {
    return (
        <div style={{fontFamily: 'Poppins, sans-serif'}} className='bg-[#EEF2F5] p-6 '>
            <TopSection />
            <FeaturedTherapist />
        </div>
    );
};

export default Dashboard;