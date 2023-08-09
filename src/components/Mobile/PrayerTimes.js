import React, { useEffect } from 'react';
import { useState } from 'react';
import { BsFillSunriseFill, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { IoMdSunny, IoIosCloudyNight, IoMdCloudyNight } from 'react-icons/io';
import { GiSunset } from 'react-icons/gi';
import { HiMoon } from 'react-icons/hi';
import Loader from '../Shared/Loader';
import bg5 from "../../assets/images/bg5.jpg"

const PrayerTimes = () => {
    const [newTimes, setNewTimes] = useState([]);
    const [place, setPlace] = useState('');
    const [district, setDistrict] = useState('');

    const { timings } = newTimes;

    // const Asr = timings?.Asr;
    // const Sunset = timings?.Sunset;
    // const Maghrib = timings?.Maghrib;
    // const Isha = timings?.Isha;
    console.log();

    const finalAsr= timings?.Asr.slice(0, 2) - 12 + timings?.Asr.slice(2, 5);
    const finalSunset= timings?.Sunset.slice(0, 2) - 12 + timings?.Sunset.slice(2, 5);
    const finalMaghrib= timings?.Maghrib.slice(0, 2) - 12 + timings?.Maghrib.slice(2, 5);
    const finalIsha= timings?.Isha.slice(0, 2) - 12 + timings?.Isha.slice(2, 5);
    const finalSocond= timings?.Firstthird.slice(0, 2) - 12 + timings?.Firstthird.slice(2, 5);

    // console.log();

    // const times = useSelector((state) => state.boyan.prayerTimes);
    // const todayTimes = times[0]?.timings;
    // console.log(todayTimes);
    // const [prayerTimes, setPrayerTimes] = useState();
    //    const [times, setTimes]= useState()
    // const [{timings}]= prayerTimes;

    //    for(let i=0; i<prayerTimes?.length; i++){
    //         setTimes(prayerTimes[i]);
    //    }

    // const date = new Date();





    // const monthName = date.toLocaleString('default', { month: 'short' });
    // const todayDate = (today + " " + monthName + " " + year);

    // useEffect(() => {

    //     , [])
    


    const getLocation = () => {
        const date = new Date();
        const today = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const googleAPI = "AIzaSyD0dYm6BbM5H62QdoYq_kfC_Jk6oNait5Y"


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                const url = `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&method=1&school=1&month=${month}&year=${year}`;
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        const times = data?.data
                        setNewTimes(times[today - 1]);

                    })
                    const url2 = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${googleAPI}`
                    fetch(url2)
                    .then(res=> res.json())
                    .then(data=>{
                        const place= data.results[0].address_components[1].long_name;
                        const dis= data.results[0].address_components[2].long_name;
                        setPlace(place);
                        setDistrict(dis);
                    })
            });


        }

    }

    useEffect(() => {
        getLocation();
    }, [])


    return (
        <div>
            {
                timings? <div style={{backgroundImage: `url(${bg5})`,backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat', }} className='mt-16 mb-20 h-screen'>
                <h1 className='text-2xl mt-2 bg-black bg-opacity-40 text-white font-bold'>নামাজের সময়সূচী</h1>
                <h1 className='font-bold bg-black bg-opacity-40 text-white'>আজ {newTimes?.date?.gregorian?.weekday?.en} ({newTimes?.date?.readable} ইং) ({newTimes?.date?.hijri?.day} {newTimes?.date?.hijri?.month?.en} {newTimes?.date?.hijri?.year} হিজরি)</h1>
                <h1 className='text-sm bg-black bg-opacity-40 text-white'>আপনার অবস্থানঃ {place +", "+ district}</h1>
                <button onClick={()=> getLocation()} className='btn btn-xs btn-white my-2'>স্থান পুনরায় সেট করুন</button>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><BsFillSunriseFill className='text-2xl' />
                        <h1 className='ml-2'> ফজর</h1></div>
                    <h1 className=''>ভোর {timings?.Fajr.slice(0, -5)} AM</h1>
                </div>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><BsFillSunriseFill className='text-2xl' />
                        <h1 className='ml-2'> সূর্যোদয়</h1></div>
                    <h1 className=''>সকাল {timings?.Sunrise.slice(0, -5)} AM</h1>
                </div>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><BsFillSunFill className='text-2xl' />
                        <h1 className='ml-2'> যোহর</h1></div>
                    <h1 className=''>দুপুর {timings?.Dhuhr.slice(0, -5)} PM</h1>
                </div>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><IoMdSunny className='text-2xl' />
                        <h1 className='ml-2'> আসর</h1></div>
                    <h1 className=''>বিকাল 0{finalAsr} PM</h1>
                </div>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><GiSunset className='text-2xl' />
                        <h1 className='ml-2'> সূর্যাস্ত</h1></div>
                    <h1 className=''>সন্ধ্যা 0{finalSunset} PM</h1>
                </div>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><GiSunset className='text-2xl' />
                        <h1 className='ml-2'> মাগরিব</h1></div>
                    <h1 className=''>সন্ধ্যা 0{finalMaghrib} PM</h1>
                </div>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><HiMoon className='text-2xl' />
                        <h1 className='ml-2'> ঈশা</h1></div>
                    <h1 className=''>রাত 0{finalIsha} PM</h1>
                </div>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><IoIosCloudyNight className='text-2xl' />
                        <h1 className='ml-2'> রাতের ২য় অংশ শুরু</h1></div>
                    <h1 className=''>রাত {finalSocond} PM</h1>
                </div>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><IoMdCloudyNight className='text-2xl' />
                        <h1 className='ml-2'> রাতের শেষ অংশ শুরু</h1></div>
                    <h1 className=''>রাত {timings?.Lastthird.slice(0, -5)} AM</h1>
                </div>
                <div className='flex justify-between items-center p-3 shadow-md bg-black bg-opacity-40 text-white rounded mb-2 w-11/12 mx-auto '>
                    <div className='flex justify-center items-center'><BsFillMoonStarsFill className='text-2xl' />
                        <h1 className='ml-2'> তাহাজ্জুদের শেষ সময়</h1></div>
                    <h1 className=''>ভোর {timings?.Imsak.slice(0, -5)} AM</h1>
                </div>
            </div>: <Loader/>
            }
        </div>
    );
};

export default PrayerTimes;