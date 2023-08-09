import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddNotice = () => {
    const [id, setId] = useState('');

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


    const handleAddNotice = (e) => {
        e.preventDefault();
        const link = `https://docs.google.com/uc?export=download&id=${id}`
        const description = e.target.description.value;

        const noticeData = { link, description};

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
                    en: `${description}`,
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

        fetch('https://madrumi.clearsoftwares.xyz/notices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(noticeData)

        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                sendNofification();
            })
    }
    return (
        <div>
            <h1 className='text-3xl border-b-4 border-accent mt-28 inline-block'>একটি নতুন নোটিশ যোগ করুন</h1>
            <form onSubmit={handleAddNotice} className='mt-8 flex justify-center items-center flex-col'>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">ফাইল</span>
                    </label>
                    <input type="file" id="customFile" placeholder="ওডিও ফাইল" onChange={(e) => guardarArchivo(e)} />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">বিবরণ</span>
                    </label>
                    <textarea name='description' class="textarea textarea-bordered" placeholder="বিবরণ লিখুন"></textarea>
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">গুগল ম্যাপ লিংক</span>
                    </label>
                    <input name='googleMap' class="input input-bordered" placeholder="গুগল ম্যাপ লিংক"/>
                </div>

                <button disabled={!id} className='btn btn-md btn-accent text-white my-4 rounded-md' type='submit'>নোটিশ যোগ করুন</button>
            </form>
        </div>
    );
};

export default AddNotice;