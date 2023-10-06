import React, { useEffect, useState } from 'react';
import KobitaTable from './KobitaTable';
import UpdateModal from './UpdateModal';

const KobitaList = () => {
const [kobitas, setKobitas]= useState([]);
const [updateKobita, setUpdateKobita]= useState(null);

    useEffect(() => {
        fetch(`http://128.140.52.151:5000/getkobita`)
            .then(res => res.json())
            .then(data => {
                setKobitas(data)
            })
    }, [updateKobita, kobitas, setKobitas, setUpdateKobita])

    return (
        <div className='mt-28'>
            <h1 className='text-2xl my-8 font-bold'>কবিতার ওডিও সম্পাদনা করুন</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>ক্রঃ</th>
                            <th>কবিতার নাম</th>
                            <th>কবিতার লেখক</th>
                            <th>কবিতার শিল্পী</th>
                            <th>কবিতা লেখার সময়</th>
                            <th>ব্যাবহারকারি</th>
                            <th>সম্পাদনা</th>
                            <th>মুছুন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            kobitas.map((kobita, index) => <KobitaTable
                                key={kobita._id}
                                kobita={kobita}
                                setUpdateKobita={setUpdateKobita}
                                index={index}
                            ></KobitaTable>)
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
                updateKobita && <UpdateModal setUpdateKobita={setUpdateKobita} updateKobita={updateKobita}></UpdateModal>
            }
        </div>
    );
};

export default KobitaList;