import React from 'react';
import { toast } from 'react-toastify';

const Register = () => {

    const handleAddUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const mobile = e.target.mobile.value;
        const query = e.target.query.value;
        const queryData = { name, mobile, query}

        
        fetch('http://128.140.52.151:5000/users', {
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
            <h1 className='text-xl border-b-4 border-accent font-bold mt-8 inline-block'>তথ্য দিয়ে রেজিস্টার করুন</h1><br />
            <hr />
            <p className='text-justify mx-4 mt-4'> আসসালামু আলাইকুম, সন্মানিত দীনি ভাই <span className='font-bold'>খানকাহে রব্বানিয়্যা</span> অ্যাপস এ আপনাকে স্বাগতম। আপনি যদি আরিফ বিল্লাহ রুমিয়ে জামানা হজরত মাওলানা হাকিম মোহাম্মদ আখতার সাহেব (রহঃ) এর সুযোগ্য খলিফা <span className='font-bold'>হজরত মাওলানা মুফতি শফী সাহেব (দাঃ বাঃ)</span> এর 
            হাতে হাত দিয়ে বায়াত গ্রহণ করে থাকেন তবে নিম্নের ফরম পূরণ করে আপনার তথ্য দিয়ে অ্যাপে রেজিস্টার করুন।
            </p>
            <p className='text-justify mx-2 font-bold'>বিঃ দ্রঃ- একবারের বেশি রেজিস্টার করার দরকার নেই। </p>
            <div>
                <form onSubmit={handleAddUser} className='mt-8 flex justify-center items-center flex-col'>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">আপনার নাম</span>
                        </label>
                        <input name='name' type="text" placeholder="আপনার নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">মোবাইল নং</span>
                        </label>
                        <input name='mobile' type="text" placeholder="মোবাইল নং লিখুন" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">ঠিকানা</span>
                    </label>
                    <textarea name='query' class="textarea textarea-bordered" placeholder="আপনার ঠিকানা লিখুন"></textarea>
                </div>
                    <button className='btn btn-md btn-accent text-white my-4 rounded-md' type='submit'>রেজিস্টার</button>
                </form>
            </div>
        </div>
    );
};

export default Register;