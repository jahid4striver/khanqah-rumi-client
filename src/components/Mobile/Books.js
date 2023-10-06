import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';


const Books = ({}) => {

    const [books, setBooks]= useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(8);


    useEffect(() => {
        fetch(`http://128.140.52.151:5000/getbooks`)
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            })
    }, [])    

    useEffect(() => {
        setPageCount(Math.ceil(books.length / 8));
    }, [books.length])


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

    return (
        <div data-aos="fade-right" className='w-10/12 lg:w-11/12 mx-auto mt-16 relative bg-white text-black'>
            
            <h1 className='text-xl border-b-4 border-accent font-bold mt-8 inline-block'>বই সমূহ</h1><br />
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {books.map(book => <div className='shadow-xl flex flex-col justify-center items-center bg-white hover:shadow-accent active:shadow-red-400 p-5 rounded-r-3xl rounded-tl-3xl text-left relative'>
                        <img className='w-40' src={book.img} alt="" />
                        <p className='mt-4 font-bold'>নামঃ {book?.name}</p>
                        <p className=' font-medium'>লেখকঃ {book?.writer}</p>
                        <label class="btn btn-accent text-white font-bold mt-2"><a href={book.link}>ডাউনলোড</a>
                            </label>
                    </div>)}
            </div>
            <div className='mt-8 mb-20'>
                {books.length > 8 && <ReactPaginate
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

export default Books;

// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// const Books = () => {
//   const [numPages, setNumPages] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div>
//       <Document
//         file="path/to/pdf/file.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         {[...Array(numPages).keys()].map((pageNumber) => (
//           <Page key={pageNumber} pageNumber={pageNumber + 1} />
//         ))}
//       </Document>
//     </div>
//   );
// };

// export default Books;
