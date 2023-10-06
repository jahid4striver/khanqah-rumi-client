import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddAudio = () => {
    const [categories, setCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [boyanSubject, setBoyanSubject] = useState('');
    const [boyanName, setBoyanName] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        fetch('http://128.140.52.151:5000/getcategories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [categories])

    useEffect(() => {
        fetch('http://128.140.52.151:5000/getsubjects')
            .then(res => res.json())
            .then(data => {
                setSubjects(data);
            })
    }, [categories])

    function guardarArchivo(e) {
        var file = e.target.files[0] //the file
        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(e.target.files[0]) //start conversion...
        reader.onload = function (e) { //.. once finished..
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            fetch('https://script.google.com/macros/s/AKfycbwYKgy85mYgpiT7U3mV2T6vum0yKg_I-AAJegLuNfeosEO_HligOW_ic_M1mW8pUqk/exec', //your AppsScript URL
                { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
                .then(res => res.json()).then((a) => {
                    if (a.id) {
                        toast.success("ফাইল আপলোড হয়েছে")
                        setId(a.id)

                    }
                }).catch(e => console.log(e)) // Or Error in console
        }
    }





    //https://drive.google.com/file/d/1OoJ8ZN7ysF6amYQE4ismeCp8zaYAsS3q/view?usp=drivesdk
    // const newlink = 'https://drive.google.com/file/d/1uIGHYwTDutJqn-WD_5gIsufKpPn_Cfoh/view?usp=sharing';
    // const links = newlink.slice(0, -17);
    // const linking = links.substring(32);
    // const blinking = `https://docs.google.com/uc?export=download&id=${linking}`
    // console.log(blinking);

    const handleAddAudio = (e) => {
        e.preventDefault();
        const category = e.target.category.value;
        const subject = e.target.subject.value;
        const date = e.target.date.value;
        const name = e.target.name.value;
        const place = e.target.place.value;
        const mainCategory = "boyan";
        // const googlelink = e.target.link.value;
        // const googlelink2 = googlelink.slice(0, -17);
        // const googlelink3 = googlelink2.substring(32);
        const link = `https://docs.google.com/uc?export=download&id=${id}`


        const description = e.target.description.value;

        const audioData = { date, name, category, subject, place, link, description, mainCategory }

        const API_KEY = "NDM0YjVhMDItYzI2MC00NTVmLWI5MjYtZmRiYWJhY2UyYzIz";
        const ONESIGNAL_APP_ID = "1daf2556-5bbc-44d3-956a-e56318d29698";
        const BASE_URL = "https://onesignal.com/api/v1";


        const sendNofification = () => {
            const body = {
                app_id: ONESIGNAL_APP_ID,
                included_segments: ['Subscribed Users'],
                data: {
                    foo: 'bar',
                },
                contents: {
                    en: `আরিফ বিল্লাহ হজরত মাওলানা মুফতি শফী সাহেবের ${subject} বিষয়ে বয়ানঃ- ${name}, যোগ হয়েছে এখনই শুনুন`,
                },
            };

            fetch('https://onesignal.com/api/v1/notifications', {
                method: "POST",
                'url': BASE_URL,
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${API_KEY}`,
                },
                body: body ? JSON.stringify(body) : null

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

        fetch('http://128.140.52.151:5000/addboyans', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(audioData)

        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                setBoyanSubject(subject);
                setBoyanName(name)
                // sendNofification();
                console.log(subject);
            })

        fetch('http://128.140.52.151:5000/latest', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(audioData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1 className='text-3xl border-b-4 border-accent mt-28 inline-block'>একটি নতুন বয়ানের ওডিও যোগ করুন</h1>
            <form onSubmit={handleAddAudio} className='mt-8 flex justify-center items-center flex-col'>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">তারিখ বাছাই করুন</span>
                    </label>
                    <input name='date' type="date" placeholder="তারিখ" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">বিভাগ বাছাই করুন</span>
                    </label>
                    <select name='category' class="select select-bordered w-full max-w-xs">
                        {
                            categories.map(category => <option>{category.categoryName}</option>)
                        }
                    </select>
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">বিষয় বাছাই করুন</span>
                    </label>
                    <select name='subject' class="select select-bordered w-full max-w-xs">
                        {
                            subjects.map(subject => <option>{subject.subjectName}</option>)
                        }
                    </select>
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">ওডিও নাম</span>
                    </label>
                    <input name='name' type="text" placeholder="ওডিও নাম" class="input input-bordered w-full max-w-xs" />

                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">বয়ানের স্থান</span>
                    </label>
                    <input name='place' type="text" placeholder="বয়ানের স্থান" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">ওডিও ফাইল</span>
                    </label>
                    <input type="file" id="customFile" placeholder="ওডিও ফাইল" onChange={(e) => guardarArchivo(e)} />
                    {/* <input name='link' type="text"  class="input input-bordered w-full max-w-xs" /> */}
                </div>
                {/* <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">ডাউনলোড লিংক</span>
                    </label>
                    <input name='category' type="text" placeholder="ডাউনলোড লিংক" class="input input-bordered w-full max-w-xs" />
                </div> */}
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">বিবরণ</span>
                    </label>
                    <textarea name='description' class="textarea textarea-bordered" placeholder="বিবরণ লিখুন"></textarea>
                </div>

                <button disabled={!id} className='btn btn-md btn-accent text-white my-4 rounded-md' type='submit'>ওডিও যোগ করুন</button>
            </form>

            {/* <div class="overflow-x-auto my-8">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL#</th>
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            categories.map((category, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{category.categoryName}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default AddAudio;