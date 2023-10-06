import React, { useEffect, useState } from 'react';
import QATable from './QATable';
import UpdateModal from './UpdateModal';

const QAList = () => {
const [QAs, setQAs]= useState([]);
const [updateQa, setUpdateQa]= useState(null);

    useEffect(() => {
        fetch(`http://128.140.52.151:5000/getanswer`)
            .then(res => res.json())
            .then(data => {
                setQAs(data)
            })
    }, [updateQa, QAs, updateQa,setUpdateQa])

    return (
        <div className='mt-28'>
            <h1 className='text-2xl my-8 font-bold'>প্রশ্ন উত্তর ওডিও সম্পাদনা করুন</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>ক্রঃ</th>
                            <th>প্রশ্ন</th>
                            <th>উত্তর নং</th>
                            <th>প্রশ্ন উত্তর বিষয়</th>
                            <th>বাবহারকারি</th>
                            <th>সম্পাদনা</th>
                            <th>মুছুন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            QAs.map((qa, index) => <QATable
                                key={qa._id}
                                qa={qa}
                                setUpdateQa={setUpdateQa}
                                index={index}
                            ></QATable>)
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
                        </tr>
                    </tfoot>
                </table>
            </div>
            {
                updateQa && <UpdateModal setUpdateQa={setUpdateQa} updateQa={updateQa}></UpdateModal>
            }
        </div>
    );
};

export default QAList;