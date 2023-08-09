import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SurahDetails = () => {
    const { surahId } = useParams();
    const [quran, setQuran] = useState([]);
    const [chap, setChap]= useState([])

    const {name}= chap;
    console.log(name);
    useEffect(()=>{
        fetch(`https://alquranbd.com/api/tafheem/sura/list`)
        .then(res=> res.json())
        .then(data=>{
            const filter= data.filter(chapter=>chapter.id===surahId);
            setChap(filter[0]);
        })
    },[]);

    useEffect(() => {
        fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahId}`)
            .then(res => res.json())
            .then(data => {

                console.log(data.verses);
                setQuran(data.verses)
            })
    }, [surahId])



    return (
        <div className='bg-yellow-100 h-full'>
            <h1 className='text-2xl font-bold bg-yellow-100 pt-24'>সূরাহ {name}</h1>
            <div className='px-4 mt-6 text-justify'>
            {quran.map((ayah, index) => <span style={{ fontFamily: 'arabic_unicode' }} className='text-4xl'>{ayah.text_uthmani}<span style={{ backgroundColor: 'rgba(0,127,174,.3)'}} className={`p-1 rounded-full text-xs mx-2 `}>{index + 1}</span></span>)
            }
            </div>
        </div >
    );
};


export default SurahDetails;