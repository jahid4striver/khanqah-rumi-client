import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddShortBoyan = () => {
    const [id, setId] = useState('');
    const [subjects, setSubjects] = useState([]);


    useEffect(() => {
        fetch('https://madrumi.clearsoftwares.xyz/getsubjects')
            .then(res => res.json())
            .then(data => {
                setSubjects(data);
            })
    }, [subjects])

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


    const handleAddAudio = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const subject = e.target.subject.value;
        const date = e.target.date.value;
        const description = e.target.description.value;
        const mainCategory = "shorts";
       
        const link = `https://docs.google.com/uc?export=download&id=${id}`;
        const audioData = { name,subject,date,link,description, mainCategory};

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
                    en: `আরিফ বিল্লাহ হজরত মাওলানা মুফতি শফী সাহেবের ${subject} বিষয়ে ছোট বয়ানঃ- ${name}, যোগ হয়েছে এখনই শুনুন`,
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

        fetch('https://madrumi.clearsoftwares.xyz/addshort', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(audioData)

        })
            .then(res => res.json())
            .then(data => {
                toast.success("ছোট বয়ান যোগ হয়েছে");
                console.log(data);
                e.target.reset();
                sendNofification();
            })
            fetch('https://madrumi.clearsoftwares.xyz/latest', {
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
            <h1 className='text-3xl border-b-4 border-accent mt-28 inline-block'>একটি নতুন ছোট বয়ানের ওডিও যোগ করুন</h1>
            <form onSubmit={handleAddAudio} className='mt-8 flex justify-center items-center flex-col'>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">ওডিও ফাইল</span>
                    </label>
                    <input type="file" id="customFile" placeholder="ওডিও ফাইল" onChange={(e) => guardarArchivo(e)} />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">তারিখ</span>
                    </label>
                    <input name='date' type="date" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">ছোট বয়ানের নাম</span>
                    </label>
                    <input name='name' type="text" placeholder="ছোট বয়ানের নাম লিখুন" class="input input-bordered w-full max-w-xs" />
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
                        <span class="label-text">বিবরণ</span>
                    </label>
                    <textarea name='description' class="textarea textarea-bordered" placeholder="বিবরণ লিখুন"></textarea>
                </div>
                <button disabled={!id} className='btn btn-md btn-accent text-white my-4 rounded-md' type='submit'>ছোট বয়ান যোগ করুন</button>
            </form>
        </div>
    );
};

export default AddShortBoyan;