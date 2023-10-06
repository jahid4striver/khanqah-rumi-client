import React, { useEffect, useState } from 'react';

const AddSubject = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('http://128.140.52.151:5000/getsubjects')
            .then(res => res.json())
            .then(data => {
                setSubjects(data);
            })
    }, [subjects])

    const handleAddSubject = (e) => {
        e.preventDefault();
        const subjectName = e.target.subject.value;
        console.log(subjectName);
        const cateData = { subjectName: subjectName }

        fetch('http://128.140.52.151:5000/addsubjects',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cateData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
            })
    }
    return (
        <div className=''>
            <h1 className='text-3xl border-b-4 border-accent mt-28 inline-block'>একটি নতুন বয়ানের বিষয় যোগ করুন</h1>
            <form onSubmit={handleAddSubject} className='mt-16 flex justify-center items-center flex-col'>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">বিষয়ের নাম</span>
                    </label>
                    <input name='subject' type="text" placeholder="বিষয়ের নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                </div>
                <button className='btn btn-md btn-accent text-white mt-4 rounded-md' type='submit'>বিষয় যোগ করুন</button>
            </form>

            <div class="overflow-x-auto my-8">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>ক্রমিক</th>
                            <th>বিষয়ের নাম</th>
                            <th>একশন</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            subjects.map((subject, index)=><tr>
                                <td>{index+1}</td>
                                <td>{subject.subjectName}</td>
                                <td><button className='btn btn-xs btn-error text-white'>মুছে ফেলুন</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddSubject;