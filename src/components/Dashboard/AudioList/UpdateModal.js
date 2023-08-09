import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const UpdateModal = ({ updateAudio, setUpdateAudio }) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { _id, name, date, category, place, link, description} = updateAudio;


    const onSubmit = (data) => {
        fetch(`https://madrumi.clearsoftwares.xyz/getboyans/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateAudio(null)
                toast('বয়ান সম্পাদনা হয়েছে')

            })
    }

    return (
        <div className=''>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">আপডেট : {updateAudio.name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-5 grid grid-cols-1 justify-items-center'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">বয়ানের নাম</span>
                            </label>
                            <input {...register("name")} defaultValue={name} type="text" placeholder="বয়ানের নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">বয়ানের তারিখ</span>
                            </label>
                            <input {...register("date")} defaultValue={date} type="text" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">বয়ানের বিভাগ</span>
                            </label>
                            <input {...register("category")} defaultValue={category} type="text" placeholder="বয়ানের বিভাগ লিখুন" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">বয়ানের বিষয়</span>
                            </label>
                            <input {...register("subject")} defaultValue={updateAudio?.subject} type="text" placeholder="বয়ানের বিভাগ লিখুন" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">বয়ানের স্থান</span>
                            </label>
                            <input {...register("place")} defaultValue={place} type="text" placeholder="বয়ানের স্থান" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">ফাইল লিংক</span>
                            </label>
                            <input {...register("link")} defaultValue={link} type="text" placeholder="ফাইল লিংক" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">বয়ানের বিস্তারিত</span>
                            </label>
                            <textarea {...register("description")} defaultValue={description} type="text" placeholder="বয়ানের বিস্তারিত" class="textarea textarea-bordered w-full max-w-xs" />
                        </div> 
                        <input type='submit' value='আপডেট বয়ান' className='btn btn-primary' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateModal;