import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import headflower from '../../assets/images/headflower.jpg'
import mobileflower from '../../assets/images/mobileflower.jpg'
import auth from '../../Firebase/Firebase';
import Player from './UsePlayer';
import { signOut } from 'firebase/auth';
import Loader from './Loader';
import ReactCurvedText from 'react-curved-text';

const Navbar = () => {
    const location = useLocation();
    const surahId = window.location.href.split("/").pop();
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader />
    }
    console.log(user);
    {/* <div data-aos="fade-left"></div> */ }

    return (
        <>
            {
                location.pathname === '/mobile' ? <div data-aos="fade-left"></div>
                // <ReactCurvedText
                //     // width={300}
                //     // height={300}
                //     // cx={100}
                //     // cy={100}
                //     // rx={150}
                //     // ry={150}
                //     // startOffset={50}
                //     // reversed={true}
                //     text="খানকাহ চিশতিয়া এমদাদিয়া আশরাফিয়া"
                //     width={470}
                //     height={200}
                //     cx="196"
                //     cy="204"
                //     rx={160}
                //     ry={105}
                //     startOffset={20}
                //     reversed={true}
                //     // text="ReactScriptCom"
                //     textProps={{ style: { fontSize: '25' } }}
                //     tspanProps={{ dy: '-20' }}
                // />
                    //  <div data-aos="fade-left" className='lg:hidden shadow-xl bg-black bg-opacity-40 text-yellow-300 p-3 fixed top-0 w-full z-30'>
                    //     <h2 className='text-md font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                    //     <p className='text-sm'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                    // </div> 
                    :
                    location.pathname === '/mobile_boyans' ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === '/mobile_answers' ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === '/mobile_kobita' ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === '/mobile_live' ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === '/app_details' ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === '/mobile_quran' ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/mobile_quran/${surahId}` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/boyan_category` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/boyan_subject` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/prayer_times` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/books` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/new_topics` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/mobile_notice` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/register` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/boyan_month` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/answer_category` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/shorts` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : location.pathname === `/quran_recitation` ? <div className='lg:hidden shadow-xl bg-white p-3 fixed top-0 w-full z-30'>
                        <img style={{ width: '55px' }} className='w-12 absolute top-0 left-0' src={mobileflower} alt="" />
                        <h2 className='text-sm font-bold'>খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া</h2>
                        <p className='text-xs'>রুমি নগর, নবাবগঞ্জ, ঢাকা।</p>
                        <img style={{ width: '55px' }} className='absolute bottom-0 right-0 rotate-180' src={mobileflower} alt="" />
                    </div> : <div style={{ backgroundImage: `url(${headflower})`, backgroundSize: '100px', position: 'absolute', top: '-15px' }} class="navbar bg-base-100 shadow-lg h-24 bg-no-repeat z-30">
                        <div class="navbar-start">
                            <div class="dropdown">
                                <label tabindex="0" class="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/'>মুল পাতা</Link></li>
                                    <li><Link to='/dashboard'>ড্যাশবোর্ড</Link></li>
                                    <li><Link to='/boyans'>সকল বয়ান</Link></li>
                                    <li><Link to='/answers'>সকল প্রশ্ন-উত্তর</Link></li>
                                    <li><Link to='/history'>ইতিহাস</Link></li>
                                    <li><Link to='/notice'>নোটিশ</Link></li>
                                    <li><Link to='/live'>লাইভ বয়ান</Link></li>
                                </ul>
                            </div>
                            <Link to='/' class="btn btn-ghost normal-case text-xl text-center mt-4">খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া </Link>
                        </div>
                        <div class="navbar-center hidden lg:flex">
                            <ul class="menu menu-horizontal p-0 mt-4">
                                <li><Link to='/'>মুল পাতা</Link></li>
                                {user && <li><Link to='/dashboard'>ড্যাশবোর্ড</Link></li>}
                                <li><Link to='/boyans'>সকল বয়ান</Link></li>
                                <li><Link to='/answers'>সকল প্রশ্ন-উত্তর</Link></li>
                                <li><Link to='/history'>ইতিহাস</Link></li>
                                <li><Link to='/notice'>নোটিশ</Link></li>
                                <li><Link to='/live'>লাইভ বয়ান</Link></li>
                                <li><Link className={`${!user ? "hidden" : ""}`} to='/live'>{user?.email.slice(0, 7)}</Link></li>
                                <li>{user ? <Link onClick={() => signOut(auth)} to='/'>লগআউট</Link> : <Link to='/login'>লগইন</Link>}</li>
                            </ul>
                        </div>
                        {
                            location.pathname === '/dashboard' ? <div class="navbar-end">
                                <label for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                            </div> : ''
                        }
                    </div>
            }
        </>
    );
};

export default Navbar;