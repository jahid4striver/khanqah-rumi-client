import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader';
import play from '../../assets/images/play.png';
import ReactPaginate from 'react-paginate';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';


const QuranRecitation = ({ setAudioData }) => {
    const [recitations, setRecitations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(20);

    useEffect(() => {
        fetch(`http://128.140.52.151:5000/getrecitation`)
            .then(res => res.json())
            .then(data => {
                setPageCount(Math.ceil(data.length / 20));
            })
    }, [])

    useEffect(() => {
        fetch(`http://128.140.52.151:5000/getrecitation`)
            .then(res => res.json())
            .then(data => {
                setRecitations(data);
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loader />
    }

    const handleSearchResult = (event) => {
        const searchText = event.target.value;
        const match = recitations.filter(recitation => recitation.name.includes(searchText));
        setSearchResult(match);
        setIsSearching(true);
    }

    const handlePlayAudio = (recitation) => {
        setAudioData(recitation);
        const newView= recitation.view ? recitation.view : 0;
        const view= parseInt(newView)+1;
        const viewCount= {view};

        fetch(`http://128.140.52.151:5000/getkobita/${recitation?._id}`, {
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
    const handleDownloadCount = (recitation) => {
        const newDownload= recitation.download ? recitation.download : 0;
        const download= parseInt(newDownload)+1;
        const downloadCount= {download};

        fetch(`http://128.140.52.151:5000/getkobita/${recitation?._id}`, {
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
        <div className='w-10/12 lg:w-11/12 mx-auto mt-16 relative'>
            <h1 className='text-xl border-b-4 border-accent font-bold mt-8 inline-block'>পবিত্র কুরআন পাকের তিলওয়াত সমূহ</h1><br />
            <div className='flex justify-center items-center my-4'>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text font-bold">সূরার নাম লিখে অনুসন্ধান করুন</span>
                    </label>
                    <input onMouseDown={reloadFn} onChange={handleSearchResult} type="text" placeholder="সূরার নাম লিখুন" class="input input-bordered input-accent w-full max-w-xs" />
                </div>
            </div>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    isSearching ? searchResult.slice(start, end).map(recitaion => <div style={{ height: '200px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <h3 className='text-lg font-bold min-h-8'>নামঃ {recitaion?.name}</h3>
                        <h3 className='text-base'><span className='font-bold'>  কণ্ঠঃ</span> {recitaion.reciter}</h3>
                        <div className='flex flex-row'>
                            <FaAssistiveListeningSystems className='text-xs' />
                            <p className='ml-px text-xs'>{recitaion?.view}</p>
                            <AiOutlineDownload className='text-xs ml-2' />
                            <p className='ml-px text-xs'>{recitaion?.download}</p>
                        </div>
                        <div className='mt-4 text-center absolute bottom-4 rounded-2xl left-12 shadow-2xl p-2'>
                            <label onClick={() => handlePlayAudio(recitaion)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold mr-12">শুনুন
                            </label>
                            <label onClick={()=>handleDownloadCount(recitaion)} for="my-modal-6" class="btn btn-accent text-white font-bold mr-2"><a href={recitaion.link}>ডাউনলোড</a>
                            </label>
                        </div>
                    </div>) : recitations.slice(start, end).map(recitation => <div style={{ height: '200px' }} className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <h3 className='text-lg font-bold min-h-8'>নামঃ {recitation?.name}</h3>
                        <h3 className='text-base'><span className='font-bold'>  কণ্ঠঃ</span> {recitation.reciter}</h3>
                        <div className='flex flex-row'>
                            <FaAssistiveListeningSystems className='text-xs' />
                            <p className='ml-px text-xs'>{recitation?.view}</p>
                            <AiOutlineDownload className='text-xs ml-2' />
                            <p className='ml-px text-xs'>{recitation?.download}</p>
                        </div>
                        <div className='mt-4 text-center absolute bottom-4 rounded-2xl left-12 shadow-2xl p-2'>
                            <label onClick={() => handlePlayAudio(recitation)} for="my-modal-6" class="btn btn-accent btn-circle text-white font-bold mr-12">শুনুন
                            </label>
                            <label onClick={()=>handleDownloadCount(recitation)} for="my-modal-6" class="btn btn-accent text-white font-bold mr-2"><a href={recitation.link}>ডাউনলোড</a>
                            </label>
                        </div>
                    </div>)
                }
            </div>
            <div className='mt-8 mb-20'>
                {recitations.length> 20 && <ReactPaginate
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

export default QuranRecitation;