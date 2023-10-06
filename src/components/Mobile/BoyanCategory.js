import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineVerticalLeft } from 'react-icons/ai';
import bg3 from '../../../src/assets/images/bg3.jpg'
import bg4 from '../../../src/assets/images/bg4.png'
import bg5 from '../../../src/assets/images/bg5.jpg'
import bg8 from '../../../src/assets/images/bg8.jpg'
import { useDispatch } from 'react-redux';
import { getAllBoyans, getBoyanCategory } from '../../features/boyanSlice.js/boyanSlice';
import Loader from '../Shared/Loader';



const BoyanCategory = () => {
  const  dispatch= useDispatch();
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://128.140.52.151:5000/getboyans')
            .then(res => res.json())
            .then(data => {
                dispatch(getAllBoyans(data))
                setLoading(false)
            })
    }, [dispatch]);

    if (loading) {
        return <Loader />
    }

    return (
        <div style={{backgroundImage: `url(${bg5})`,backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} className='mt-16 mb-20 h-screen'>
            <h1 className='my-8 bg-black bg-opacity-40  text-white font-bold text-xl p-5'>বয়ানের বিভাগ বাছাই করুন</h1>
            <div className='grid grid-cols-2 mx-4'>
                <Link onClick={()=>dispatch(getBoyanCategory("all"))} data-aos="zoom-in" to='/mobile_boyans' className=' bg-black bg-opacity-40 text-white  p-3  mt-4 text-sm te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft> সকল ধরনের বয়ান</Link>
                <Link onClick={()=>dispatch(getBoyanCategory("জুম'আর বয়ান"))} data-aos="zoom-in" to='/mobile_boyans' className=' bg-black bg-opacity-40 p-3 text-white  mt-4 text-sm te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft> জুমআর মসজিদের বয়ান</Link>
                <Link onClick={()=>dispatch(getBoyanCategory("জুম'আর পরের বয়ান"))} data-aos="zoom-in" to='/mobile_boyans' className='bg-black bg-opacity-40 p-3 text-white  mt-4 text-sm te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft> জুমআর পরের বয়ান</Link>
                <Link onClick={()=>dispatch(getBoyanCategory("মাসিক ইজতেমার বয়ান"))} data-aos="zoom-in" to='/mobile_boyans' className=' bg-black bg-opacity-40 p-3 text-white  mt-4 text-sm te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft> মাসিক ইজতেমার বয়ান</Link>
                <Link onClick={()=>dispatch(getBoyanCategory("মাহফিলের বয়ান"))} data-aos="zoom-in" to='/mobile_boyans' className=' bg-black bg-opacity-40 p-3 text-white  mt-4 text-sm te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft> বিভিন্ন মাহফিলের বয়ান</Link>
                <Link onClick={()=>dispatch(getBoyanCategory("সাপ্তাহিক তরবিয়তি মজলিশ"))} data-aos="zoom-in" to='/mobile_boyans' className=' bg-black bg-opacity-40 p-3 text-white  mt-4 text-sm te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft> সাপ্তাহিক তরবিয়তি মজলিস</Link>
                <Link data-aos="zoom-in" to='/boyan_subject' className=' bg-black bg-opacity-40 p-3 text-white  mt-4 text-sm te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft> বিষয় ভিত্তিক বয়ান</Link>
                <Link data-aos="zoom-in" to='/boyan_month' className=' bg-black bg-opacity-40 p-3 text-white  mt-4 text-sm te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft> মাস ভিত্তিক বয়ান</Link>
            </div>
        </div>
    );
};

export default BoyanCategory;