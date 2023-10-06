import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdCategory } from 'react-icons/md';
import { AiFillNotification,AiFillQuestionCircle, AiFillAudio } from 'react-icons/ai';
import { RiBroadcastFill } from 'react-icons/ri';
import { GiArchiveRegister } from 'react-icons/gi';
import { BiNews } from 'react-icons/bi';
import { HiPencilSquare } from 'react-icons/hi2';
import { IoBookSharp } from 'react-icons/io5';


const Footer = () => {
    const [islive, setIsLive]= useState()
    
    // const islive= useSelector((state) => state.boyan.islive);
    console.log(islive);
    const surahId = window.location.href.split("/").pop();
    const location = useLocation();

    // function navigateFn() {
    //     location.replace('https://madrasha-e-jalaluddin-rumi.web.app/mobile');
    //     return false;
    // }

    // const close = () => {
    //     window.close();
    // }

    useEffect(()=>{
        fetch('http://128.140.52.151:5000/getlive')
        .then(res=> res.json())
        .then(data=> setIsLive(data[0]?.live))
    },[])


    return (
        <div className=''>
            {/* <Link to='/mobile' className='bg-white rounded-t-full p-4 h-16 flex flex-col justify-center items-center '>
                        <div className='bg-white relative w-28  p-5 flex flex-col mb-8 rounded-t-full items-center hover:text-success'>
                            <RiBroadcastFill className='text-xl text-black hover:text-success  w-16'></RiBroadcastFill>
                            <p className='font-medium text-xs'>লাইভ</p>
                          
                            <p className='font-extrabold text-red-800 text-sm'>বন্ধ আছে</p>
                        </div>
                    </Link> */}
            {/* text-2xl mb-3 text-green-900 rounded-full w-16 shadow-lg  */}
            {/* <p className='font-extrabold text-red-800 text-xs'>বন্ধ</p> */}
            {
                location.pathname === '/mobile' ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full mx-auto fixed bottom-px  shadow-xl'>
                    <Link to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-white w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/new_topics' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-white  w-28   p-5 flex flex-col items-center hover:text-success'>
                            <BiNews className='text-xl text-black hover:text-success'></BiNews>
                            <p className='font-medium text-xs z-30'>নতুন বিষয়</p>
                        </div>
                    </Link>
                    <Link to='/mobile_live' className='p-2  h-12 flex flex-col justify-center items-center'>
                        <div className='bg-white  w-28  p-4 flex flex-col items-center rounded-full hover:text-success '>
                            <p className='text-xs font-medium'>লাইভ</p>
                            <RiBroadcastFill className='text-2xl text-black hover:text-success  w-16'></RiBroadcastFill>
                            {islive=== true ?  <p className='text-xs font-fold text-green-700 z-20 mb-4'>চালু আছে</p>: <p className='text-xs font-bold z-20 mb-4 text-red-700'>বন্ধ আছে</p>}
                        </div>
                    </Link>

                    <Link to='/mobile_notice' className='  p-2 h-12 flex flex-col justify-center items-center '>
                        <div className='bg-white w-28  p-5 flex flex-col hover:text-success items-center'>
                            <AiFillNotification className='text-xl text-black hover:text-success'></AiFillNotification>
                            <p className='font-medium text-xs'>নোটিস</p>
                        </div>
                    </Link>
                    <Link to='/register' className='  p-2 h-12 flex flex-col justify-center items-center '>
                        <div className='bg-white w-28  p-5 flex flex-col items-center hover:text-success'>
                            <GiArchiveRegister className='text-xl text-black hover:text-success'></GiArchiveRegister>
                            <p className='font-medium text-xs'>রেজিস্টার</p>
                        </div>
                    </Link>
                </div> : location.pathname === '/mobile_boyans' ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                    <Link to='/new_topics' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28   p-5 flex flex-col items-center hover:text-success'>
                            <BiNews className='text-xl text-black hover:text-success'></BiNews>
                            <p className='font-medium text-xs z-30'>নতুন বিষয়</p>
                        </div>
                    </Link>
                </div> : location.pathname === '/mobile_answers' ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                    <Link to='/new_topics' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28   p-5 flex flex-col items-center hover:text-success'>
                            <BiNews className='text-xl text-black hover:text-success'></BiNews>
                            <p className='font-medium text-xs z-30'>নতুন বিষয়</p>
                        </div>
                    </Link>
                </div> : location.pathname === '/mobile_kobita' ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                    <Link to='/new_topics' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28   p-5 flex flex-col items-center hover:text-success'>
                            <BiNews className='text-xl text-black hover:text-success'></BiNews>
                            <p className='font-medium text-xs z-30'>নতুন বিষয়</p>
                        </div>
                    </Link>
                </div> : location.pathname === '/mobile_live' ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div> : location.pathname === '/app_details' ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div> : location.pathname === '/mobile_quran' ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div> : location.pathname === `/mobile_quran/${surahId}` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div> : location.pathname === `/boyan_category` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                    <Link to='/new_topics' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28   p-5 flex flex-col items-center hover:text-success'>
                            <BiNews className='text-xl text-black hover:text-success'></BiNews>
                            <p className='font-medium text-xs z-30'>নতুন বিষয়</p>
                        </div>
                    </Link>
                </div> : location.pathname === `/boyan_subject` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                    <Link to='/new_topics' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28   p-5 flex flex-col items-center hover:text-success'>
                            <BiNews className='text-xl text-black hover:text-success'></BiNews>
                            <p className='font-medium text-xs z-30'>নতুন বিষয়</p>
                        </div>
                    </Link>
                </div>: location.pathname === `/prayer_times` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div>:location.pathname === `/books` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div>:location.pathname === `/new_topics` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div>:location.pathname === `/mobile_notice` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div>:location.pathname === `/register` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div>:location.pathname === `/boyan_month` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div>:location.pathname === '/answer_category' ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                    <Link to='/new_topics' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28   p-5 flex flex-col items-center hover:text-success'>
                            <BiNews className='text-xl text-black hover:text-success'></BiNews>
                            <p className='font-medium text-xs z-30'>নতুন বিষয়</p>
                        </div>
                    </Link>
                </div>:location.pathname === `/shorts` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div>: location.pathname === `/quran_recitation` ? <div style={{ backgroundColor: 'rgba(255, 99, 71, 0)' }} className='grid grid-cols-5 gap-px w-full shadow-2xl mx-auto fixed bottom-px'>
                    <Link  to='/mobile' className='p-2 h-12 flex flex-col justify-center items-center  '>
                        <div className='bg-gray-100 w-28   p-5 flex flex-col items-center hover:text-success'>
                            <AiFillHome className='text-xl text-black hover:text-success'></AiFillHome>
                            <p className='font-medium text-xs'>হোম</p>
                        </div>
                    </Link>
                    <Link to='/boyan_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillAudio className='text-xl text-black hover:text-success'></AiFillAudio>
                            <p className='font-medium text-xs'>বয়ান</p>
                        </div>
                    </Link>
                    <Link to='/answer_category' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <AiFillQuestionCircle className='text-xl text-black hover:text-success'></AiFillQuestionCircle>
                            <p className='font-medium text-xs'>প্রশ্ন উত্তর</p>
                        </div>
                    </Link>
                    <Link to='/mobile_kobita' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <HiPencilSquare className='text-xl text-black hover:text-success'></HiPencilSquare>
                            <p className='font-medium text-xs'>কবিতা</p>
                        </div>
                    </Link>
                    <Link to='/books' className='p-2  h-12 flex flex-col justify-center items-center '>
                        <div className='bg-gray-100  w-28  p-5 flex flex-col items-center hover:text-success'>
                            <IoBookSharp className='text-xl text-black hover:text-success'></IoBookSharp>
                            <p className='font-medium text-xs'>কিতাবাদী</p>
                        </div>
                    </Link>
                </div>: <footer class="footer p-10 bg-neutral text-neutral-content">
                    <div>
                        <span class="footer-title">বিভাগ সমূহ</span>
                        <a class="link link-hover">বয়ান</a>
                        <a class="link link-hover">প্রশ্ন-উত্তর</a>
                        <a class="link link-hover">কবিতা</a>
                        <a class="link link-hover">শের</a>
                    </div>
                    <div>
                        <span class="footer-title">বিভাগ সমূহ</span>
                        <a class="link link-hover">বয়ান</a>
                        <a class="link link-hover">প্রশ্ন-উত্তর</a>
                        <a class="link link-hover">কবিতা</a>
                        <a class="link link-hover">শের</a>
                    </div>
                    <div>
                        <span class="footer-title">বিভাগ সমূহ</span>
                        <a class="link link-hover">বয়ান</a>
                        <a class="link link-hover">প্রশ্ন-উত্তর</a>
                        <a class="link link-hover">কবিতা</a>
                        <a class="link link-hover">শের</a>
                    </div>
                    <p> মাদরাসা-এ জালালুদ্দীন রুমী ২০২২</p>
                </footer>
            }
        </div>
    );
};

export default Footer;