import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const PopularCities = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch('/cities.json')
            .then(res => res.json())
            .then(data => {
                console.log(data?.cities);
                setData(data?.cities);
            })
            .catch((error) => console.log('Error fetching data: ', error))
    } ,[]);

    if(data?.length == 0) {
        return <div>Loading...</div>
    }

    const last = data?.length - 1 && data?.length - 2 && data?.length - 3;

    return (
        <div className="">
            <h3 className='text-[18px] font-[500px] mb-2'>Popular Cities</h3>

            <div className="bg-white grid grid-cols-3 justify-between items-center border border-b-2 rounded-lg">
                {
                    data?.map((city) => (
                        <div key={city?.id} className=" mb-4">
                            <p className={`text-[#156BCA] underline text-[14px] px-6 py-3 ${city?.id && parseInt(city?.id) < 4 ? "mt-6" : ""}`}>{city?.name}</p>
                            {
                                city?.id < 19 ? <hr className="mt-3"/> : ""
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularCities;