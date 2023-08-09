import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const UpdateModal = ({ updateQa, setUpdateQa }) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { _id, question, answer_no, category, link} = updateQa;


    const onSubmit = (data) => {
        fetch(`https://madrumi.clearsoftwares.xyz/getanswer/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateQa(null)
                toast('বয়ান সম্পাদনা হয়েছে')

            })
    }

    return (
        <div className=''>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">আপডেট : {updateQa.question}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-5 grid grid-cols-1 justify-items-center'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">প্রশ্ন</span>
                            </label>
                            <input {...register("question")} defaultValue={question} type="text" placeholder="প্রশ্নের নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">প্রশ্নের বিভাগ</span>
                            </label>
                            <input {...register("category")} defaultValue={category} type="text" placeholder="প্রশ্নের বিভাগ লিখুন" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">উত্তর নং</span>
                            </label>
                            <input {...register("answer_no")} defaultValue={answer_no} type="text" placeholder="উত্তর নং লিখুন" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">ফাইল লিংক</span>
                            </label>
                            <input {...register("link")} defaultValue={link} type="text" placeholder="ফাইল লিংক" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type='submit' value='আপডেট উত্তর' className='btn btn-primary' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateModal;