import vector from '../../assets/images/Vector.png';
import spa from '../../assets/images/Group 1000001700.png';

const TopSection = () => {
    return (
        <div className='bg-white rounded-lg px-6 py-4 flex items-center justify-between'>
            <div>
                <h3 className='text-[#152A16] text-[20px] font-[500] '>I'm Looking for Massage Therapist Near...</h3>
                <p className='text-[15px]'>
                    In using this site, I agree to be bound by the {" "}
                    <a href="/sign-up" className="text-[#4285F3] underline">Terms of Service</a> {" "} <br />
                    and {""}
                    <a href="/sign-up" className="text-[#4285F3] underline">Privacy Policy</a>
                </p>
                <div className='relative mt-5'>
                    <input type="text" placeholder='ZIP code or city name' className='border rounded-lg py-2 px-3 w-full bg-[#EEF2F5]'/>
                    <button className='bg-[#156BCA] px-7 py-1.5 text-white rounded-lg absolute right-1 top-[2.5px]'>
                        GO
                    </button>
                </div>
            </div>
            <div className='relative'>
                <img src={spa} alt="" className='z-10'/>
                <img src={vector} alt="" className='absolute right-44 top-5 z-1 overflow-hidden'/>
            </div>
        </div>
    );
};

export default TopSection;