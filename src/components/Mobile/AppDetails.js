import React from 'react';
import { toast } from 'react-toastify';

const AppDetails = () => {

    const handleAddQuery = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const mobile = e.target.mobile.value;
        const query = e.target.query.value;
        const availHeight=window.screen.availHeight;
        const availWidth=window.screen.availWidth;
        const width=window.screen.width;
        const height=window.screen.height;
        const resulationWidth= window.screen.width * window.devicePixelRatio;
        const resulationHeight= window.screen.height * window.devicePixelRatio;

        const queryData = { name, mobile, query, availHeight, availWidth, width, height, resulationWidth, resulationHeight};

        
        fetch('https://madrumi.clearsoftwares.xyz/querys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(queryData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
                toast.success("আপনার অভিযোগ/পরামর্শ পাঠানো হয়েছে")
            })

        }
    return (
        <div className='mt-12 mb-28'>
            <h1 className='text-xl border-b-4 border-accent font-bold mt-8 inline-block'>তথ্য ও অভিযোগ</h1><br />
            <hr />
            <p className='text-justify mx-4 mt-4'><span className='font-bold'>খানকাহ রুমি</span> অ্যাপটি একটি ওয়েব অ্যাপ যা খানকা চিশতিয়া এমদাদিয়া আশরাফিয়া
                এবং আরিফ বিল্লাহ রুমিয়ে জামানা হজরত মাওলানা হাকিম মোহাম্মদ আখতার সাহেব (রহঃ) এর সুযোগ্য খলিফা <span className='font-bold'>হজরত মাওলানা মুফতি শফী সাহেব (দাঃ বাঃ)</span> এর বয়ান ও সম্পর্কিত বিষয় প্রচারের জন্য তৈরি করা হয়েছে। যেহেতু ওয়েব অ্যাপ তাই অ্যাপটি
                ব্যাবহার করতে অবশ্যই ইন্টারনেট কানেকশন লাগবে।</p>
            <p className='text-justify mx-4'>অ্যাপটি ব্যবহার করতে গিয়ে কারো যদি কোন অসুবিধা হয় বা অ্যাপটিতে কোন নতুন ফিচার অ্যাড করার পরামর্শ থাকে তবে নিম্নের ফরম পূরণ করে সাবমিট করুন। </p>
            <div>
                <form onSubmit={handleAddQuery} className='mt-8 flex justify-center items-center flex-col'>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">আপনার নাম</span>
                        </label>
                        <input name='name' type="text" placeholder="আপনার নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">হোয়াটস অ্যাপ/টেলিগ্রাম মোবাইল নং</span>
                        </label>
                        <input name='mobile' type="text" placeholder="মোবাইল নং লিখুন" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">অভিযোগ/পরামর্শ</span>
                    </label>
                    <textarea name='query' class="textarea textarea-bordered" placeholder="অভিযোগ/পরামর্শ বিস্তারিত লিখুন"></textarea>
                </div>
                    <button className='btn btn-md btn-accent text-white my-4 rounded-md' type='submit'>অভিযোগ/পরামর্শ পাঠান</button>
                </form>
            </div>
        </div>
    );
};

export default AppDetails;