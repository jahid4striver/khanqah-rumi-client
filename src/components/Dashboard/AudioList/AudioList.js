import React, { useEffect, useState } from 'react';
import AudioTable from './AudioTable';
import UpdateModal from './UpdateModal';

const AudioList = () => {
const [boyans, setBoyans]= useState([]);
const [updateAudio, setUpdateAudio]= useState(null);

    useEffect(() => {
        fetch(`https://madrumi.clearsoftwares.xyz/getboyans`)
            .then(res => res.json())
            .then(data => {
                setBoyans(data)
            })
    }, [updateAudio, boyans, updateAudio, setUpdateAudio])

    return (
        <div className='mt-28'>
            <h1 className='text-2xl my-8 font-bold'>বয়ানের ওডিও সম্পাদনা করুন</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>ক্রঃ</th>
                            <th>তারিখ</th>
                            <th>বয়ানের নাম</th>
                            <th>বয়ানের বিভাগ</th>
                            <th>বয়ানের বিষয়</th>
                            <th>বাবহারকারি</th>
                            <th>সম্পাদনা</th>
                            <th>মুছুন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            boyans.map((boyan, index) => <AudioTable
                                key={boyan._id}
                                boyan={boyan}
                                setUpdateAudio={setUpdateAudio}
                                index={index}
                            ></AudioTable>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            {
                updateAudio && <UpdateModal setUpdateAudio={setUpdateAudio} updateAudio={updateAudio}></UpdateModal>
            }
        </div>
    );
};

export default AudioList;