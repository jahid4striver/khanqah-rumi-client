import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Shared/Loader';
import play from '../../assets/images/play.png';

const LatestBoyans = ({setAudioData}) => {
    const [boyans, setboyans] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        fetch(`https://madrumi.clearsoftwares.xyz/gethomeboyans`)
            .then(res => res.json())
            .then(data => {
                setboyans(data);
                setLoading(false)
                // console.log(data);
            })
    }, [])

    if (loading) {
        return <Loader />
    }


    
    return (
        <div className='w-10/12 lg:w-11/12 mx-auto mt-4 relative'>
            <h1 className='text-3xl border-b-4 border-accent font-bold my-8 inline-block'>মুফতি শফি সাহেব (দাঃ বাঃ) এর সাম্প্রতিক বয়ান সমূহ</h1><br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                     boyans.slice(0, 8).map(boyan => <div style={{ height: '370px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <h3 className='text-lg font-bold min-h-8'>বয়ানের বিষয়ঃ {boyan.name}</h3>
                        <h3 className='text-base'><span className='font-bold'>স্থানঃ </span>{boyan.place}</h3>
                        <h3 className='text-base'><span className='font-bold'>তারিখঃ</span> {boyan.date}  <span className='font-bold'>  বিভাগঃ</span> {boyan.category}</h3>
                        <p className='my-4'>{boyan.description}</p>
                        <div className='mt-4 text-center absolute bottom-8 left-32'>
                            <label onClick={() => setAudioData(boyan)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold"><img width='200px' src={play} alt="" />
                            </label>
                        </div>
                    </div>)
                }
            </div>
            <div className='text-right my-4'>
                <Link to='/boyans' className='btn btn-md btn-accent font-bold text-white text-right'>সকল বয়ান শুনুন</Link>
            </div>
        </div >
    );
};

export default LatestBoyans;