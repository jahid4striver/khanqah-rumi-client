import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineVerticalLeft } from 'react-icons/ai';
import bg3 from '../../../src/assets/images/bg3.jpg'
import bg4 from '../../../src/assets/images/bg4.png'
import bg5 from '../../../src/assets/images/bg5.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoyans, getBoyanCategory, getBoyanMonth, getBoyanSubject } from '../../features/boyanSlice.js/boyanSlice';
import Loader from '../Shared/Loader';
import moment from 'moment';



const MonthWiseBoyan = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [catgories, setCatgories] = useState([]);

    const allboyan = useSelector((state) => state.boyan.allboyan[0]);



    let boyans = allboyan.map(({ date }) => date)
    // const result = boyans.sort((a, b) => b - a)

    let array = [];

    for (let i = 0; i < boyans.length; i++) {
        var newDateVariableMonth = moment(moment(boyans[i]).format("YYYY/MM/DD")).format('MMMM');
        array.push({ month: newDateVariableMonth, year: boyans[i].slice(0, 4) });
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const sorter = (a, b) => {
        if (a.year !== b.year) {
            return b.year - a.year;
        } else {
            return months.indexOf(b.month)- months.indexOf(a.month);
        };
    };
    array.sort(sorter);
    // console.log(array);

    let array2=[];

    for (let i = 0; i < array.length; i++) {
        array2.push(array[i].month +" "+ array[i].year)
        
    }
    var unique = array2.filter((value, index, arr) => arr.indexOf(value) === index);

    let array3=[];

    for (let i = 0; i < unique.length; i++) {
        array3.push({month:unique[i]})
        
    }

    console.log(array3);


    useEffect(() => {
        fetch('https://madrumi.clearsoftwares.xyz/getboyans')
            .then(res => res.json())
            .then(data => {
                dispatch(getAllBoyans(data))
                setLoading(false)
            })
    }, [dispatch]);
    useEffect(() => {
        fetch('https://madrumi.clearsoftwares.xyz/getsubjects')
            .then(res => res.json())
            .then(data => {
                setCatgories(data)
                setLoading(false)
            })
    }, [dispatch]);

    if (loading) {
        return <Loader />
    }

    return (
        <div style={{ backgroundImage: `url(${bg5})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='mt-16 mb-20 h-screen'>
            <h1 className='my-8 bg-black bg-opacity-40  text-white font-bold text-xl p-5'>বয়ানের মাস ও সাল বাছাই করুন</h1>
            <div className='grid grid-cols-2 mx-4'>
                {
                    array3.map(month => <Link onClick={() => dispatch(getBoyanMonth(month.month))} data-aos="zoom-in" to='/mobile_boyans' className=' bg-black bg-opacity-40 text-white text-sm p-3  mt-4 te mx-2 shadow-md flex justify-left items-center rounded-lg font-bold hover:bg-white hover:text-black'><AiOutlineVerticalLeft></AiOutlineVerticalLeft>{month.month}</Link>)
                }
            </div>
        </div>
    );
};

export default MonthWiseBoyan;