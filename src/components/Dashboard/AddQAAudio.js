import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddQAAudio = () => {
    const [categories, setCategories] = useState([]);
    const [id, setId]= useState('')


    useEffect(() => {
        fetch('http://128.140.52.151:5000/get_qa_categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [categories])


    const newlink = 'https://drive.google.com/file/d/1uIGHYwTDutJqn-WD_5gIsufKpPn_Cfoh/view?usp=sharing';
    const links = newlink.slice(0, -17);
    const linking = links.substring(32);
    const blinking = `https://docs.google.com/uc?export=download&id=${linking}`
    console.log(blinking);


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
              if(a.id){
                  toast.success("ফাইল আপলোড হয়েছে")
                  setId(a.id)

              }
            }).catch(e => console.log(e)) // Or Error in console
        }
      }





    const handleAddAudio = (e) => {
        e.preventDefault();
        const category = e.target.category.value;
        const question = e.target.question.value;
        const answer_no = e.target.answer_no.value;
        const mainCategory = "answers";
        // const googlelink = e.target.link.value;
        // const googlelink2 = googlelink.slice(0, -17);
        // const googlelink3 = googlelink2.substring(32);
        const link = `https://docs.google.com/uc?export=download&id=${id}`

        const audioData = { question, answer_no, category, link, mainCategory }

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
                    en: `আরিফ বিল্লাহ হজরত মাওলানা মুফতি শফী সাহেবের ${category} বিষয়ে প্রশ্ন-উত্তরঃ- ${question}, যোগ হয়েছে এখনই শুনুন`,
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

        fetch('http://128.140.52.151:5000/addanswer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(audioData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
                // sendNofification()
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
            <h1 className='text-3xl border-b-4 border-accent mt-28 inline-block'>একটি নতুন প্রশ্ন-উত্তরের ওডিও যোগ করুন</h1>
            <form onSubmit={handleAddAudio} className='mt-8 flex justify-center items-center flex-col'>
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
                        <span class="label-text">প্রশ্ন</span>
                    </label>
                    <input name='question' type="text" placeholder="প্রশ্ন লিখুন" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">ওডিও ফাইল</span>
                    </label>
                    <input type="file"  id="customFile" placeholder="ওডিও ফাইল" onChange={(e) => guardarArchivo(e)} />
                </div>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">উত্তর নং</span>
                    </label>
                    <input name='answer_no' type="text" placeholder="উত্তর নং" class="input input-bordered w-full max-w-xs" />
                </div>
                <button disabled={!id} className='btn btn-md btn-accent text-white my-4 rounded-md' type='submit'>প্রশ্ন যোগ করুন</button>
            </form>
        </div>
    );
};

export default AddQAAudio;