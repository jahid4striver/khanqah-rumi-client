import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddKobitaAudio = () => {
    const [id, setId] = useState('')

    console.log(id);

    // const newlink = 'https://drive.google.com/file/d/1uIGHYwTDutJqn-WD_5gIsufKpPn_Cfoh/view?usp=sharing';
    // const links = newlink.slice(0, -17);
    // const linking = links.substring(32);
    // const blinking = `https://docs.google.com/uc?export=download&id=${linking}`
    // console.log(blinking);


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
                        console.log(a.id);

                    }
                }).catch(e => console.log(e)) // Or Error in console
        }
    }





    const handleAddAudio = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const writer = e.target.writer.value;
        const singer = e.target.singer.value;
        const date_time = e.target.date_time.value;
        const mainCategory = "kobita";
        // const googlelink = e.target.link.value;
        // const googlelink2 = googlelink.slice(0, -17);
        // const googlelink3 = googlelink2.substring(32);
        const link = `https://docs.google.com/uc?export=download&id=${id}`

        const audioData = { name ,writer, singer, date_time, link,mainCategory }

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
                    en: `আরিফ বিল্লাহ হজরত মাওলানা মুফতি শফী সাহেবের লিখিত কবিতা ${name}, কণ্ঠ দিয়েছেন ${singer}, যোগ হয়েছে এখনই শুনুন`,
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

        fetch('http://128.140.52.151:5000/addkobita', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(audioData)

        })
            .then(res => res.json())
            .then(data => {
                toast.success("কবিতা যোগ হয়েছে");
                console.log(data);
                e.target.reset();
                sendNofification();
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
            <h1 className='text-3xl border-b-4 border-accent mt-28 inline-block'>একটি নতুন কবিতার ওডিও যোগ করুন</h1>
            <form onSubmit={handleAddAudio} className='mt-8 flex justify-center items-center flex-col'>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">ওডিও ফাইল</span>
                    </label>
                    <input type="file" id="customFile" placeholder="ওডিও ফাইল" onChange={(e) => guardarArchivo(e)} />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">কবিতার নাম</span>
                    </label>
                    <input name='name' type="text" placeholder="কবিতার নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">কবিতার লেখক</span>
                    </label>
                    <input name='writer' type="text" placeholder="লেখকের নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">কণ্ঠ</span>
                    </label>
                    <input name='singer' type="text" placeholder="শিল্পীর নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">কবিতা লেখার তারিখ ও সময়</span>
                    </label>
                    <input name='date_time' type="text" placeholder="তারিখ ও সময়" class="input input-bordered w-full max-w-xs" />
                </div>
                <button disabled={!id} className='btn btn-md btn-accent text-white my-4 rounded-md' type='submit'>কবিতা যোগ করুন</button>
            </form>
        </div>
    );
};

export default AddKobitaAudio;