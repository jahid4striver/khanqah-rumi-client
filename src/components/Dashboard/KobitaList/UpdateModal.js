import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const UpdateModal = ({ updateKobita, setUpdateKobita }) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { _id, name, writer, singer, link, date_time} = updateKobita;


    const onSubmit = (data) => {
        fetch(`http://128.140.52.151:5000/getkobita/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateKobita(null)
                toast('কবিতা সম্পাদনা হয়েছে')

            })
    }

    return (
        <div className=''>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">আপডেট : {updateKobita.name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-5 grid grid-cols-1 justify-items-center'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">কবিতার নাম</span>
                            </label>
                            <input {...register("name")} defaultValue={name} type="text" placeholder="কবিতার নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">কবিতার লেখক</span>
                            </label>
                            <input {...register("writer")} defaultValue={writer} placeholder="কবিতার লেখক" type="text" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">কবিতার শিল্পী</span>
                            </label>
                            <input {...register("singer")} defaultValue={singer} type="text" placeholder="কবিতার শিল্পী" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">ফাইল লিংক</span>
                            </label>
                            <input {...register("link")} defaultValue={link} type="text" placeholder="ফাইল লিংক" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">কবিতা লেখার তারিখ ও সময়</span>
                            </label>
                            <textarea {...register("date_time")} defaultValue={date_time} type="text" placeholder="কবিতা লেখার তারিখ ও সময়" class="textarea textarea-bordered w-full max-w-xs" />
                        </div> 
                        <input type='submit' value='আপডেট কবিতা' className='btn btn-primary' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateModal;