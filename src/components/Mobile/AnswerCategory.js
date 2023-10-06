import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineVerticalLeft } from 'react-icons/ai';
import bg5 from '../../../src/assets/images/bg5.jpg'
import { useDispatch } from 'react-redux';
import { getAllAnswer, getAnswerCategory } from '../../features/boyanSlice.js/boyanSlice';
import Loader from '../Shared/Loader';



const AnswerCategory = () => {
  const  dispatch= useDispatch();
  const [loading, setLoading] = useState(true);
  const [catgories, setCatgories]= useState([]);

    useEffect(() => {
        fetch('http://128.140.52.151:5000/getanswer')
            .then(res => res.json())
            .then(data => {
                dispatch(getAllAnswer(data))
                setLoading(false)
            })
    }, [dispatch]);
    useEffect(() => {
        fetch('http://128.140.52.151:5000/get_qa_categories')
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
            <h1 className='my-8 bg-black bg-opacity-40  text-white font-bold text-xl p-5'>প্রশ্ন-উত্তর বিষয় বাছাই করুন</h1>
            <div className='grid grid-cols-2 mx-4'>
            <Link onClick={()=>dispatch(getAnswerCategory("all"))} data-aos="zoom-in" to='/mobile_answers' className=' bg-black bg-opacity-40 text-white text-sm p-3  mt-4 te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft>সকল প্রশ্ন-উত্তর</Link>
                {
                    catgories.map(category=><Link onClick={()=>dispatch(getAnswerCategory(category.categoryName))} data-aos="zoom-in" to='/mobile_answers' className=' bg-black bg-opacity-40 text-white text-sm p-3  mt-4 te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft>{category.categoryName}</Link>)
                }
            </div>
        </div>
    );
};

export default AnswerCategory;