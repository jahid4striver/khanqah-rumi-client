import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Shared/Loader';
import play from '../../assets/images/play.png';

const LatestQA = ({setAudioData}) => {
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading]= useState(true);


    useEffect(() => {
        fetch('https://madrumi.clearsoftwares.xyz/getanswer')
            .then(res => res.json())
            .then(data => {
                setAnswers(data);
                setLoading(false)
            })
    }, [])

    if(loading){
        return <Loader></Loader>
    }
    return (
        <div className='w-10/12 lg:w-11/12 mx-auto'>
            <h1 className='my-16 text-3xl border-b-4 border-accent font-bold mt-8 inline-block'>মুফতি শফি সাহেব (দাঃ বাঃ) এর সাম্প্রতিক প্রশ্ন-উত্তর সমূহ</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    answers.slice(0,8).map(answer => <div style={{ height: '200px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                    <h3 className='text-lg font-bold min-h-8'>প্রশ্নঃ {answer.question}</h3>
                    <h3 className='text-base'><span className='font-bold'>উত্তর নংঃ</span> {answer.answer_no}  <span className='font-bold'>  বিভাগঃ</span> {answer.category}</h3>
                    <div className='mt-4 text-center absolute bottom-8 left-32'>
                        <label onClick={() => setAudioData(answer)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold"><img width='200px' src={play} alt="" />
                        </label>
                    </div>
                </div>)
                }
            </div>
            <div className='text-right my-4'>
            <Link to='/answers' className='btn btn-md btn-accent font-bold text-white text-right'>সকল প্রশ্ন-উত্তর শুনুন</Link>
            </div>
        </div >
    );
};

export default LatestQA;