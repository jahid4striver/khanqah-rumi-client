import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineVerticalLeft } from 'react-icons/ai';
import bg3 from '../../../src/assets/images/bg3.jpg'
import bg4 from '../../../src/assets/images/bg4.png'
import bg5 from '../../../src/assets/images/bg5.jpg'
import { useDispatch } from 'react-redux';
import { getAllBoyans, getBoyanCategory, getBoyanSubject } from '../../features/boyanSlice.js/boyanSlice';
import Loader from '../Shared/Loader';



const SubjectWiseBoyan = () => {
  const  dispatch= useDispatch();
  const [loading, setLoading] = useState(true);
  const [catgories, setCatgories]= useState([])

    useEffect(() => {
        fetch('http://128.140.52.151:5000/getboyans')
            .then(res => res.json())
            .then(data => {
                dispatch(getAllBoyans(data))
                setLoading(false)
            })
    }, [dispatch]);
    useEffect(() => {
        fetch('http://128.140.52.151:5000/getsubjects')
            .then(res => res.json())
            .then(data => {
                setCatgories(data)
                setLoading(false)
            })
    }, [dispatch]);

    if (loading) {
        return <Loader />
    }

    return (
        <div style={{backgroundImage: `url(${bg5})`,backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} className='mt-16 mb-20 h-screen'>
            <h1 className='my-8 bg-black bg-opacity-40  text-white font-bold text-xl p-5'>বয়ানের বিষয় বাছাই করুন</h1>
            <div className='grid grid-cols-2 mx-4'>
                {
                    catgories.map(category=><Link onClick={()=>dispatch(getBoyanSubject(category.subjectName))} data-aos="zoom-in" to='/mobile_boyans' className=' bg-black bg-opacity-40 text-white text-sm p-3  mt-4 te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft>{category.subjectName}</Link>)
                }
            </div>
        </div>
    );
};

export default SubjectWiseBoyan;