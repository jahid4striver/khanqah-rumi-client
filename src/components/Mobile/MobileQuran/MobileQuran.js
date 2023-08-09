import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MobileQuran = () => {
    const [chapters, setChapters]= useState([]);
    const [chapterDetails, setChapterDetials]= useState([]);


    const navigate= useNavigate();

    useEffect(()=>{
        fetch('chapters.json')
        .then(res=> res.json())
        .then(data=>{
            
            setChapters(data);
        })
    },[]);

    useEffect(()=>{
        fetch('chapterDetails.json')
        .then(res=> res.json())
        .then(data=>{
            
            setChapterDetials(data.chapters);
            console.log(data.chapters);
        })
    },[]);
    
    const goToSurah=(id)=>{
        navigate(`/mobile_quran/${id}`);
    }

    return (
        <div className='mt-20'>
            <h1 className='text-2xl font-bold mt-4 bg-red-200 pt-5'>আল-কুরআনুল কারীম</h1>
            <h1 className='text-2xl font-bold bg-red-200 pb-5'>সূরাহ সমূহ</h1>
            <div className='grid grid-col-4 grid-flow-col text-sm'>
            <div className='bg-red-100 mb-16'>
            {
                chapters.map((chapter,index)=>
                <div onClick={()=>goToSurah(chapter.id)} className='shadow-2xl flex flex-start bg-white p-2 mt-2'>
                    <span className='mr-3 my-auto'>{chapter.id}</span>
                    <p to='' className='my-auto'>সূরাহ {chapter.name}</p>
                    </div>)
            }


            </div>
            <div className='bg-red-100'>
                {
                    chapterDetails.map(cd=> <div onClick={()=>goToSurah(cd.id)} className='shadow-2xl flex justify-between bg-white p-2 mt-2'>
                    <span className='mr-3 my-auto'>{cd.name_arabic}</span>
                    <span className='mr-3 my-auto'>{cd.revelation_place==="makkah"? "মাক্কী": "মাদানি"}</span>
                    <p to='' className='my-auto'>আয়াতঃ{cd.verses_count}  </p> 
                    </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default MobileQuran;