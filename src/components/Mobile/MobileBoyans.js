import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import moment from 'moment';


const MobileBoyans = ({ setAudioData }) => {

    // const [boyans, setboyans] = useState([]);
    // const [searchText, setSearchText]= useState('')
    let getBoyan = useSelector((state) => state.boyan.allboyan[0]);
    const category = useSelector((state) => state.boyan.filter);
    const subject = useSelector((state) => state.boyan.subject);
    const month = useSelector((state) => state.boyan.month);

    // let getboyans = allboyan.map(({ date }) => date)

    const allboyan = getBoyan.map(obj => {
          return {...obj, date: obj.date.slice(-2)+" "+ moment(moment(obj.date).format("YYYY/MM/DD")).format('MMMM')+" "+ obj.date.slice(0,4)};
      });

    // const result = boyans.sort((a, b) => b - a)
    // const newArray = allboyan.map((
        
    //     { category: category, date: date, description: description, download: download,
    //         link: link, mainCategory: mainCategory, name: name,
    //         place: place, subject: subject, view: view, _id: _id}) => (

    //     {
    //         category, date, description, download, link, mainCategory, name, place, subject
    //         , view, _id
    //     }));

    // let array = [];

    // for (let i = 0; i < getboyans.length; i++) {
    //     var newDateVariableMonth = moment(moment(getboyans[i]).format("YYYY/MM/DD")).format('MMMM');
    //   let newBoyan=  allboyan[i].months=(newDateVariableMonth + " " + getboyans[i].slice(0, 4));
    //   console.log(newBoyan);
    // }

    // allboyan.forEach(element => {
    // let month=''
    //     for (let i = 0; i < array.length; i++) {
    //         month = array[i]; 
    //     }

    //     element.month= month;
    // });


    




    console.log(allboyan);
    // console.log(array);


    const boyans = category === "all" ? allboyan : category === "subject" ? allboyan.filter(boyan => boyan.subject === subject) : category === "month"? allboyan.filter(boyan=>boyan.date.includes(month)) : allboyan.filter(boyan => boyan.category === category);
    // const boyans= beforeSorted.sort((a,b)=>b.date-a.date);
    // const boyans = beforeSorted.sort(function (a, b) {
    //     return (a?.date > b?.date) ? -1 : ((a?.date < b?.date) ? 1 : -1);
    // });

    // console.log(allboyan, category);


    // const [loading, setLoading] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    // const [audioPlayer, setAudioPlayer] = useState();
    // const [playing, setPlaying] = useState(false)
    const [pageCount, setPageCount] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(20);
    // const [playing, setPlaying]= useState(false)



    useEffect(() => {
        setPageCount(Math.ceil(boyans.length / 20));
    }, [boyans.length])


    const handleSearchResult = (event) => {
        const searchText = event.target.value;
        // const filtered = boyans.filter(boyan => boyan.name.includes(search))
        const match = boyans.filter(boyan => boyan.name.includes(searchText));
        setSearchResult(match);
        // setPageCount(Math.ceil(match.length/5));
        setIsSearching(true);
    }

    const handlePlayAudio = (boyan) => {
        setAudioData(boyan);
        const newView = boyan.view ? boyan.view : 0;
        const view = parseInt(newView) + 1;
        const viewCount = { view };

        fetch(`https://madrumi.clearsoftwares.xyz/getboyans/${boyan?._id}`, {
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
    const handleDownloadCount = (boyan) => {
        const newDownload = boyan.download ? boyan.download : 0;
        const download = parseInt(newDownload) + 1;
        const downloadCount = { download };

        fetch(`https://madrumi.clearsoftwares.xyz/getboyans/${boyan?._id}`, {
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

    let st = 0;
    let en = 20;

    const handlePageClick = (data) => {
        if (data.selected + 1 < 3) {
            st = st * data.selected + 1 * 20;
        } else {
            st = st * data.selected + 1 * 20 + 20;
        }

        if (data.selected + 1 <= 1) {
            st = 0
            en = 20
        }
        en = en * data.selected + 20;
        setStart(st);
        setEnd(en);
        window.scrollTo(0, 0);
    }

    const reloadFn = () => {
        setStart(st);
        setEnd(en);
    }

    return (
        <div data-aos="fade-right" className='w-10/12 lg:w-11/12 mx-auto mt-16 relative bg-gray-100 text-black'>
            {/* {
                playing ? <div className='fixed top-28 right-px z-50'>
                    <label for="my-modal-6" className='btn btn-square btn-accent text-white'>
                        <img src={ecu} alt="" />
                    </label>
                </div> : ''
            } */}
            <h1 className='text-xl border-b-4 border-accent font-bold mt-8 inline-block'>মুফতি শফি সাহেব (দাঃ বাঃ) এর {category === "জুম'আর বয়ান" ? "জুম'আর সকল বয়ান" : category === "all" ? "সকল বয়ান সমূহ" :
                category === "জুম'আর পরের বয়ান" ? "জুম'আর পরের বয়ান" : category === "সাপ্তাহিক তরবিয়তি মজলিশ" ? "সাপ্তাহিক তরবিয়তি মজলিশের বয়ান" : category === "মাসিক ইজতেমার বয়ান" ? "মাসিক ইজতেমার বয়ান" : category === "মাহফিলের বয়ান" ? "বিভিন্ন মাহফিলের বয়ান" : subject + " বিষয়ে বয়ান"}</h1><br />
            <div className='flex justify-center items-center my-4'>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text font-bold">বয়ানের বিষয় লিখে অনুসন্ধান করুন</span>
                    </label>
                    <input onMouseDown={reloadFn} onChange={handleSearchResult} type="text" placeholder="বয়ানের বিষয় লিখুন" class="input input-bordered bg-white input-accent w-full max-w-xs" />
                </div>
            </div>

            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    isSearching ? searchResult.slice(start, end).map(boyan => <div style={{ height: '370px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <h3 className='text-lg font-bold min-h-8'>বয়ানের বিষয়ঃ {boyan.name}</h3>
                        <h3 className='text-base'><span className='font-bold'>স্থানঃ </span>{boyan.place}</h3>
                        <h3 className='text-base'><span className='font-bold'>তারিখঃ</span> {boyan.date}  <span className='font-bold'>  বিভাগঃ</span> {boyan.category}</h3>
                        <p className='my-4'>{boyan.description}</p>
                        <div className='flex flex-row'>
                            <FaAssistiveListeningSystems className='text-xs' />
                            <p className='ml-px text-xs'>{boyan?.view}</p>
                            <AiOutlineDownload className='text-xs ml-2' />
                            <p className='ml-px text-xs'>{boyan?.download}</p>
                        </div>
                        {/* <audio className='w-11/12 mt-2 bg- absolute bottom-20 left-3' controls src={boyan.link}></audio> */}
                        <div className='mt-4 text-center absolute bottom-6 rounded-2xl left-12 shadow-2xl p-2'>
                            <label onClick={() => handlePlayAudio(boyan)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold mr-12">শুনুন
                            </label>
                            <label onClick={() => handleDownloadCount(boyan)} for="my-modal-6" class="btn btn-accent text-white font-bold mr-2"><a href={boyan.link}>ডাউনলোড</a>
                            </label>
                        </div>
                    </div>) : boyans.slice(start, end).map(boyan => <div style={{ height: '370px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <h3 className='text-lg font-bold min-h-8'>বয়ানের বিষয়ঃ {boyan.name}</h3>
                        <h3 className='text-base'><span className='font-bold'>স্থানঃ </span>{boyan.place}</h3>
                        <h3 className='text-base'><span className='font-bold'>তারিখঃ</span> {boyan.date}  <span className='font-bold'>  বিভাগঃ</span> {boyan.category}</h3>
                        <p className='my-4'>{boyan.description}</p>
                        <div className='flex flex-row'>
                            <FaAssistiveListeningSystems className='text-xs' />
                            <p className='ml-px text-xs'>{boyan?.view}</p>
                            <AiOutlineDownload className='text-xs ml-2' />
                            <p className='ml-px text-xs'>{boyan?.download}</p>
                        </div>
                        {/* <audio className='w-11/12 mt-2 bg- absolute bottom-20 left-3' controls src={boyan.link}></audio> */}
                        <div className='mt-4 text-center absolute bottom-6 rounded-2xl left-12 shadow-2xl p-2'>
                            <label onClick={() => handlePlayAudio(boyan)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold mr-12">শুনুন
                            </label>
                            <label onClick={() => handleDownloadCount(boyan)} for="my-modal-6" class="btn btn-accent text-white font-bold mr-2"><a href={boyan.link}>ডাউনলোড</a>
                            </label>
                        </div>
                    </div>)
                }
            </div>
            <div className='mt-8 mb-20'>
                {boyans.length > 20 && <ReactPaginate
                    previousLabel={'পূর্ববর্তী'}
                    nextLabel={'পরবর্তী'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={6}
                    onPageChange={handlePageClick}
                    containerClassName={'btn-group justify-center'}
                    pageClassName={'btn btn-accent text-white'}
                    activeClassName={'btn bg-white text-black'}
                    previousClassName={'btn btn-accent text-white'}
                    nextClassName={'btn btn-accent text-white'}
                    breakClassName={'btn btn-accent text-white'}

                //    pageLinkClassName={'btn-link'}

                ></ReactPaginate>}
            </div>

            {/* {
                    audioPlayer && <AudioPlayer setAudioPlayer={setAudioPlayer}></AudioPlayer>
                } */}
            {/* <AudioPlayer audioPlayer={audioPlayer}></AudioPlayer> */}
        </div >
    );
};

export default MobileBoyans;