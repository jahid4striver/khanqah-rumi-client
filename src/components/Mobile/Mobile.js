import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaQuran } from "react-icons/fa";
import { AiFillAudio, AiFillQuestionCircle } from "react-icons/ai";
import live from '../../assets/images/live.svg'
import boyan from '../../assets/images/boyan.svg'
import question from '../../assets/images/question.svg'
import kobita from '../../assets/images/kobita.svg'
import quran from '../../assets/images/quran.svg'
import prayer from '../../assets/images/prayer.svg'
import book from '../../assets/images/book.svg'
import info from '../../assets/images/info.svg'
import bg3 from '../../../src/assets/images/bg3.jpg'
import bg8 from '../../../src/assets/images/bg8.jpg'
import short from '../../../src/assets/images/short.png'
import quranlisten from '../../../src/assets/images/quranlisten.png'
import { useDispatch } from 'react-redux';
import { getPrayerTimes } from '../../features/boyanSlice.js/boyanSlice';





const Mobile = () => {
    // const location = useLocation();
    const dispatch= useDispatch();

    // const getLocation=()=>{
    //     const date = new Date();
    //     const today = date.getDate();
    //     const month = date.getMonth() + 1;
    //     const year = date.getFullYear();


    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             const lat = position.coords.latitude;
    //             const lon = position.coords.longitude;

    //             const url = `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&method=1&school=1&month=${month}&year=${year}`;
    //             fetch(url)
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     dispatch(getPrayerTimes(data.data[today - 1]));
    //                 })
    //         });

    //     }

    // }
    



    return (
        <div style={{backgroundImage: `url(${bg8})`,backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} className='relative bg-red-100'>
            {/* <iframe className='mx-auto' src="https://khanqaherumi.mixlr.com/embed" frameborder="0" scrolling="no" height="150px" width="150px"></iframe> */}
            <div className='h-screen flex justify-center items-center'>
                <div className='grid grid-cols-3 gap-2 w-11/12 mx-auto'>
                    <Link data-aos="fade-right" to='/boyan_category' className='ml-4 mt-40 shadow-lg border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                    <img className='w-12 mr-5' src={boyan} alt="" />
                        <h2 className='text-sm'>বয়ান</h2>
                    </Link>
                    <Link data-aos="zoom-in" to='/shorts' className='ml-4 mt-40 border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                    <img className='w-8' src={short} alt="" />
                        <h2 className='text-xs'>ছোট বয়ান</h2>
                    </Link>
                    <Link data-aos="zoom-in" to='/answer_category' className='ml-4 mt-40 border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                    <img className='w-12' src={question} alt="" />
                        <h2 className='text-xs'>প্রশ্ন-উত্তর</h2>
                    </Link>
                    <Link data-aos="fade-left" to='/mobile_kobita' className='ml-4 border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                    <img className='w-12 ' src={kobita} alt="" />
                        <h2 className='text-sm'>কবিতা</h2>
                    </Link>
                    {/* <Link data-aos="fade-right" to='/quran_recitation' className='ml-4 border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                        <img className='w-12' src={quranlisten} alt="" />
                        <h2 className='text-xs'>কুরআন তিলওয়াত</h2>
                    </Link> */}
                    <Link data-aos="fade-right" to='/mobile_live' className='ml-4 border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                        <img className='w-12 mr-5' src={live} alt="" />
                        <h2 className='text-sm'>লাইভ</h2>
                    </Link>
                    <Link data-aos="zoom-in" to='/mobile_quran' className='ml-4 border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                    <img className='w-12 ' src={quran} alt="" />
                        <h2 className='text-sm'>কুরআন</h2>
                    </Link>
                    <Link data-aos="fade-left" to='/prayer_times' className='ml-4 border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                    <img className='w-12 ' src={prayer} alt="" />
                        <h2 className='text-xs'>নামাজের সময়সূচী</h2>
                    </Link>
                    <Link data-aos="fade-right" to='/books' className='ml-4 border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                    <img className='w-12' src={book} alt="" />
                        <h2 className='text-sm'>কিতাবাদী</h2>
                    </Link>
                    <Link data-aos="zoom-in" to='/app_details' className='ml-4 border border-white/40 bg-white/30 backdrop-blur-xl text-white p-5 w-20 h-20 rounded-lg flex flex-col justify-center items-center hover:bg-white/60 hover:text-white'>
                    <img className='w-8' src={info} alt="" />
                        <h2 className='text-xs'>তথ্য ও অভিযোগ</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Mobile;