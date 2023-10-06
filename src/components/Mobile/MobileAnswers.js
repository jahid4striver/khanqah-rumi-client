import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader';
import ReactPaginate from 'react-paginate';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import { useSelector } from 'react-redux';


const MobileAnswers = ({ setAudioData }) => {
    const [searchResult, setSearchResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(30);

    let allAnswer = useSelector((state) => state.boyan.allanswer[0]);
    const category = useSelector((state) => state.boyan.answer_category); 
    
    const answers = category === "all" ? allAnswer : allAnswer.filter(answer => answer.category === category);


    useEffect(() => {
        setPageCount(Math.ceil(answers.length / 30));
    }, [answers.length])

    const handleSearchResult = (event) => {
        const searchText = event.target.value;
        const match = answers.filter(answer => answer.question.includes(searchText));
        setSearchResult(match);
        setIsSearching(true);
    }

    const handlePlayAudio = (answer) => {
        setAudioData(answer);
        const newView= answer.view ? answer.view : 0;
        const view= parseInt(newView)+1;
        const viewCount= {view};

        fetch(`http://128.140.52.151:5000/getanswer/${answer?._id}`, {
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
    const handleDownloadCount = (answer) => {
        const newDownload= answer.download ? answer.download : 0;
        const download= parseInt(newDownload)+1;
        const downloadCount= {download};

        fetch(`http://128.140.52.151:5000/getanswer/${answer?._id}`, {
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
    let en = 30;

    const handlePageClick = (data) => {
        if (data.selected + 1 < 3) {
            st = st * data.selected + 1 * 30;
        } else {
            st = st * data.selected + 1 * 30 + 30;
        }

        if (data.selected + 1 <= 1) {
            st = 0
            en = 30
        }
        en = en * data.selected + 30;
        setStart(st);
        setEnd(en);
        window.scrollTo(0, 0);
    }

    const reloadFn = () => {
        setStart(st);
        setEnd(en);
    }

    return (
        <div className='w-10/12 lg:w-11/12 mx-auto mt-16 relative'>
            <h1 className='text-xl border-b-4 border-accent font-bold mt-8 inline-block'>মুফতি শফি সাহেব (দাঃ বাঃ) এর {category === "all" ? "সকল প্রশ্ন-উত্তর" : category + " বিষয়ে প্রশ্ন-উত্তর"}</h1><br />
            <div className='flex justify-center items-center my-4'>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text font-bold">প্রশ্নের বিষয় লিখে অনুসন্ধান করুন</span>
                    </label>
                    <input onMouseDown={reloadFn} onChange={handleSearchResult} type="text" placeholder="প্রশ্নের বিষয় লিখুন" class="input input-bordered input-accent w-full max-w-xs" />
                </div>
            </div>

            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    isSearching ? searchResult.slice(start, end).map(answer => <div style={{ height: '250px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <h3 className='text-lg font-bold min-h-8'>প্রশ্নঃ {answer.question}</h3>
                        <h3 className='text-base'><span className='font-bold'>উত্তর নংঃ</span> {answer.answer_no}  <span className='font-bold'>  বিভাগঃ</span> {answer.category}</h3>
                        <div className='flex flex-row'>
                            <FaAssistiveListeningSystems className='text-xs' />
                            <p className='ml-px text-xs'>{answer?.view}</p>
                            <AiOutlineDownload className='text-xs ml-2' />
                            <p className='ml-px text-xs'>{answer?.download}</p>
                        </div>
                        <div className='mt-4 text-center absolute bottom-6 rounded-2xl left-12 shadow-2xl p-2'>
                            <label onClick={() => handlePlayAudio(answer)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold mr-12">শুনুন
                            </label>
                            <label onClick={()=>handleDownloadCount(answer)} for="my-modal-6" class="btn btn-accent text-white font-bold mr-2"><a href={answer.link}>ডাউনলোড</a>
                            </label>
                        </div>
                    </div>) : answers.slice(start, end).map(answer => <div style={{ height: '250px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <h3 className='text-lg font-bold min-h-8'>প্রশ্নঃ {answer.question}</h3>
                        <h3 className='text-base'><span className='font-bold'>উত্তর নংঃ</span> {answer.answer_no}  <span className='font-bold'>  বিভাগঃ</span> {answer.category}</h3>
                        <div className='flex flex-row'>
                            <FaAssistiveListeningSystems className='text-xs' />
                            <p className='ml-px text-xs'>{answer?.view}</p>
                            <AiOutlineDownload className='text-xs ml-2' />
                            <p className='ml-px text-xs'>{answer?.download}</p>
                        </div>
                        <div className='mt-4 text-center absolute bottom-6 rounded-2xl left-12 shadow-2xl p-2'>
                            <label onClick={() => handlePlayAudio(answer)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold mr-12">শুনুন
                            </label>
                            <label onClick={()=>handleDownloadCount(answer)} for="my-modal-6" class="btn btn-accent text-white font-bold mr-2"><a href={answer.link}>ডাউনলোড</a>
                            </label>
                        </div>
                    </div>)
                }
            </div>
            <div className='mt-8 mb-20'>
                {answers.length > 8 && <ReactPaginate
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
                    breakClassName={'btn btn-accent text-white'}></ReactPaginate>}
            </div>
        </div >
    );
};

export default MobileAnswers;