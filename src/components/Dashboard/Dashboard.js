import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardHome from './DashboardHome';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-center">
               <div className='w-11/12 mx-auto'>
               <Outlet/>
               </div>
            </div>
            <div class="drawer-side mt-20">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-accent text-white font-semibold">
                    {/* <!-- Sidebar content here --> */}
                    <li className='bg-blue-400'><Link to='/dashboard/addcategory'>বয়ানের বিভাগ যোগ করুন</Link></li>
                    <li className='bg-blue-400'><Link to='/dashboard/addsubject'>বয়ানের বিষয় যোগ করুন</Link></li>
                    <li className='bg-blue-400'><Link to='/dashboard/add_qa_category'>প্রশ্ন-উত্তর বিভাগ যোগ করুন</Link></li>
                    <li className='bg-red-300'><Link to='/dashboard/addaudio'>বয়ানের ওডিও যোগ করুন</Link></li>
                    <li className='bg-red-300'><Link to='/dashboard/add_qa_audio'>প্রশ্ন-উত্তর ওডিও যোগ করুন</Link></li>
                    <li className='bg-red-300'><Link to='/dashboard/add_kobita_audio'>কবিতার ওডিও যোগ করুন</Link></li>
                    <li className='bg-red-300'><Link to='/dashboard/add_short_audio'>ছোট বয়ানের ওডিও যোগ করুন</Link></li>
                    <li className='bg-red-300'><Link to='/dashboard/add_books'>বইয়ের ফাইল যোগ করুন</Link></li>
                    <li className='bg-red-300'><Link to='/dashboard/add_notice'>নোটিশ যোগ করুন</Link></li>
                    <li className='bg-orange-300'><Link to='/dashboard/boyan_list'>বয়ানের ওডিও সম্পাদনা</Link></li>
                    <li className='bg-orange-300'><Link to='/dashboard/qa_list'>প্রশ্ন-উত্তর ওডিও সম্পাদনা</Link></li>
                    <li className='bg-orange-300'><Link to='/dashboard/kobita_list'>কবিতার ওডিও সম্পাদনা</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;