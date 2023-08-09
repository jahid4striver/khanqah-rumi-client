import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import Loader from '../Shared/Loader';


const MobileNotice = ({}) => {

    const [notices, setNotices]= useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(8);
    const [loading, setLoading]= useState(true);


    useEffect(() => {
        fetch(`https://madrumi.clearsoftwares.xyz/getnotices`)
            .then(res => res.json())
            .then(data => {
                setNotices(data);
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        setPageCount(Math.ceil(notices.length / 8));
    }, [notices.length])


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
        window.scrollTo(0, 0);
    }

    const reloadFn = () => {
        setStart(st);
        setEnd(en);
    }

    if(loading){
        return <Loader/>
    }

    return (
        <div data-aos="fade-right" className='w-10/12 lg:w-11/12 mx-auto mt-16 relative bg-white text-black'>
            
            <h1 className='text-xl border-b-4 border-accent font-bold mt-8 inline-block'>নোটিশ সমূহ</h1><br />
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {notices.slice(start, end).map(notice => <div className='shadow-xl bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <img className='' width='400px' src={notice.link} alt="" />
                        <p className='my-4'>{notice?.description}</p>
                      {notice.googleMap && <a href={notice?.googleMap} className='btn btn-accent text-white' target="_blank" rel="noopener noreferrer">গুগল ম্যাপ লিংক</a>}
                    </div>)}
            </div>
            <div className='mt-8 mb-20'>
                {notices.length > 8 && <ReactPaginate
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
        </div >
    );
};

export default MobileNotice;