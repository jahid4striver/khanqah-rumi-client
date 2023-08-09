import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader';
import play from '../../assets/images/play.png';
import ReactPaginate from 'react-paginate';


const Answers = ({ setAudioData }) => {
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(8);

    useEffect(() => {
        fetch(`https://madrumi.clearsoftwares.xyz/getanswer`)
            .then(res => res.json())
            .then(data => {
                setPageCount(Math.ceil(data.length / 8));
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

    if (loading) {
        return <Loader />
    }

    const handleSearchResult = (event) => {
        const searchText = event.target.value;
        const match = answers.filter(answer => answer.question.includes(searchText));
        setSearchResult(match);
        setIsSearching(true);
    }


    let st = 0;
    let en = 8;

    const handlePageClick = (data) => {
        if (data.selected + 1 < 3) {
            st = st * data.selected + 1 * 8;
        } else {
            st = st * data.selected + 1 * 8 + 8;
        }

        if (data.selected + 1 <= 1) {
            st = 0
            en = 8
        }
        en = en * data.selected + 8;
        setStart(st);
        setEnd(en);
    }

    const reloadFn = () => {
        setStart(st);
        setEnd(en);
    }

    return (
        <div className='w-10/12 lg:w-11/12 mx-auto mt-16 relative'>
            <h1 className='text-3xl border-b-4 border-accent font-bold mt-8 inline-block'>মুফতি শফি সাহেব (দাঃ বাঃ)এর সকল প্রশ্ন-উত্তর সমূহ</h1><br />
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
                    isSearching ? searchResult.slice(start, end).map(answer => <div style={{ height: '200px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <h3 className='text-lg font-bold min-h-8'>প্রশ্নঃ {answer.question}</h3>
                        <h3 className='text-base'><span className='font-bold'>উত্তর নংঃ</span> {answer.answer_no}  <span className='font-bold'>  বিভাগঃ</span> {answer.category}</h3>
                        <div className='mt-4 text-center absolute bottom-8 left-32'>
                            <label onClick={() => setAudioData(answer)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold"><img width='200px' src={play} alt="" />
                            </label>
                        </div>
                    </div>) : answers.slice(start, end).map(answer => <div style={{ height: '200px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <h3 className='text-lg font-bold min-h-8'>প্রশ্নঃ {answer.question}</h3>
                        <h3 className='text-base'><span className='font-bold'>উত্তর নংঃ</span> {answer.answer_no}  <span className='font-bold'>  বিভাগঃ</span> {answer.category}</h3>
                        <div className='mt-4 text-center absolute bottom-8 left-32'>
                            <label onClick={() => setAudioData(answer)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold"><img width='200px' src={play} alt="" />
                            </label>
                        </div>
                    </div>)
                }
            </div>
            <div className='my-8'>
                <ReactPaginate
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
                    breakClassName={'btn btn-accent text-white'}></ReactPaginate>
            </div>
        </div >
    );
};

export default Answers;