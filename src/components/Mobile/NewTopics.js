import React, { useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { ImFolderDownload } from 'react-icons/im';
import Loader from '../Shared/Loader';

const NewTopics = ({ setAudioData }) => {
    const [latests, setLatests] = useState([]);
    const [boyans, setBoyans] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [kobitas, setKobitas] = useState([]);
    const [shorts, setShorts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://madrumi.clearsoftwares.xyz/getlatest`)
            .then(res => res.json())
            .then(data => {
                setLatests(data);
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        fetch(`https://madrumi.clearsoftwares.xyz/getboyans`)
            .then(res => res.json())
            .then(data => {
                setBoyans(data);
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        fetch(`https://madrumi.clearsoftwares.xyz/getanswer`)
            .then(res => res.json())
            .then(data => {
                setAnswers(data);
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        fetch(`https://madrumi.clearsoftwares.xyz/getkobita`)
            .then(res => res.json())
            .then(data => {
                setKobitas(data);
                console.log(data);
                setLoading(false)
            })
    }, [])
    useEffect(() => {
        fetch(`https://madrumi.clearsoftwares.xyz/getshorts`)
            .then(res => res.json())
            .then(data => {
                setShorts(data);
                console.log(data);
                setLoading(false)
            })
    }, [])


    const handlePlayAudio = (latest) => {
        setAudioData(latest);

        if (latest.mainCategory === "boyan") {
            const filter = boyans.filter(boyan => boyan.name === latest.name);
            const filter2 = filter.filter(boyan => boyan.date === latest.date)
            const newView = filter2[0].view ? filter2[0].view : 0;
            const view = parseInt(newView) + 1;
            const viewCount = { view };

            console.log(filter2[0]._id);
            fetch(`https://madrumi.clearsoftwares.xyz/getboyans/${filter2[0]?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(viewCount)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }
        if (latest.mainCategory === "answers") {
            const filter = answers.filter(answer => answer.question === latest.question);
            const filter2 = filter.filter(answer => answer.answer_no === latest.answer_no);
            const newView = filter2[0].view ? filter2[0].view : 0;
            const view = parseInt(newView) + 1;
            const viewCount = { view };

            console.log(filter2[0]._id);
            fetch(`https://madrumi.clearsoftwares.xyz/getanswer/${filter2[0]?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(viewCount)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }

        if (latest.mainCategory === "kobita") {
            const filter = kobitas.filter(kobita => kobita.name === latest.name);
            const filter2 = filter.filter(kobita => kobita.date_time === latest.date_time)
            const newView = filter2[0].view ? filter2[0].view : 0;
            const view = parseInt(newView) + 1;
            const viewCount = { view };

            console.log(filter2[0]._id);
            fetch(`https://madrumi.clearsoftwares.xyz/getkobita/${filter2[0]?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(viewCount)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }
        if (latest.mainCategory === "shorts") {
            const filter = shorts.filter(short => short.name === latest.name);
            const filter2 = filter.filter(short => short.date === latest.date)
            const newView = filter2[0].view ? filter2[0].view : 0;
            const view = parseInt(newView) + 1;
            const viewCount = { view };

            console.log(filter2[0]._id);
            fetch(`https://madrumi.clearsoftwares.xyz/getshort/${filter2[0]?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(viewCount)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }

    }

    const handleDownloadCount = (latest) => {

        if (latest.mainCategory === "boyan") {
            const filter = boyans.filter(boyan => boyan.name === latest.name);
            const filter2 = filter.filter(boyan => boyan.date === latest.date)

            const newDownload = filter2[0].download ? filter2[0].download : 0;
            const download = parseInt(newDownload) + 1;
            const downloadCount = { download };

            console.log(filter2[0]._id);
            fetch(`https://madrumi.clearsoftwares.xyz/getboyans/${filter2[0]?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(downloadCount)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }
        if (latest.mainCategory === "answers") {
            const filter = answers.filter(answer => answer.question === latest.question);
            const filter2 = filter.filter(answer => answer.answer_no === latest.answer_no);

            const newDownload = filter2[0].download ? filter2[0].download : 0;
            const download = parseInt(newDownload) + 1;
            const downloadCount = { download };

            console.log(filter2[0]._id);
            fetch(`https://madrumi.clearsoftwares.xyz/getanswer/${filter2[0]?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(downloadCount)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }

        if (latest.mainCategory === "kobita") {
            const filter = kobitas.filter(kobita => kobita.name === latest.name);
            const filter2 = filter.filter(kobita => kobita.date_time === latest.date_time);

            const newDownload = filter2[0].download ? filter2[0].download : 0;
            const download = parseInt(newDownload) + 1;
            const downloadCount = { download };

            console.log(filter2[0]._id);
            fetch(`https://madrumi.clearsoftwares.xyz/getkobita/${filter2[0]?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(downloadCount)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }
        if (latest.mainCategory === "shorts") {
            const filter = shorts.filter(short => short.name === latest.name);
            const filter2 = filter.filter(short => short.date === latest.date);

            const newDownload = filter2[0].download ? filter2[0].download : 0;
            const download = parseInt(newDownload) + 1;
            const downloadCount = { download };

            console.log(filter2[0]._id);
            fetch(`https://madrumi.clearsoftwares.xyz/getshort/${filter2[0]?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(downloadCount)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }


    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className='mt-12 mb-28'>
            <h1 className='text-xl border-b-4 border-accent font-bold mt-8 inline-block'>সাম্প্রতিক যোগ করা বিষয়সমূহ</h1><br />
            <hr />
            <div className='grid grid-cols-1 gap-2 mt-4'>
                {
                    latests.slice(0,50).map(latest => <div style={{ height: '90px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left mt-2 relative'>
                        <div className='flex items-center'>
                            <div>
                                <label class={`btn ${latest.mainCategory === "boyan" ? 'btn-success' : latest.mainCategory === "kobita" ? "btn-secondary" : latest.mainCategory === 'answers' ? 'btn-warning' : latest.mainCategory === "shorts" ? "btn-error": ''} btn-circle text-white font-bold mr-12`}>{latest.mainCategory === "boyan" ? 'বয়ান' : latest.mainCategory === "kobita" ? "কবিতা" : latest.mainCategory === 'answers' ? 'প্রশ্ন-উত্তর' :latest.mainCategory === "shorts" ? 'ছোট বয়ান': ''}
                                </label>
                            </div>
                            <div><h3 style={{ marginLeft: '-35px', marginTop: '15px' }} className='text-xs font-bold min-h-8'>{latest.mainCategory === "answers" ? latest.question?.slice(0,38)+ (latest.question.length>38? "...":'') : latest.name} <span>{latest.mainCategory === "answers" ? '' : latest.mainCategory === "kobita" ? '' : "(" + latest?.date + ")"}</span> </h3></div>
                        </div>
                        <div className='text-center absolute right-2 rounded-2xl bottom-6 shadow-2xl p-1'>
                            <label onClick={() => handlePlayAudio(latest)} for="my-modal-6" class="btn btn-xs btn-accent btn-circle text-white font-bold mr-2"><BsFillPlayFill />
                            </label>
                            <label onClick={() => handleDownloadCount(latest)} for="my-modal-6" class="btn btn-xs btn-accent btn-circle text-white font-bold"><a href={latest.link}><ImFolderDownload /></a>
                            </label>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NewTopics;