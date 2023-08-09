import React from 'react';

const AudioPlayer = ({ audioData }) => {

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{audioData?.name} {audioData?.date}</h3>
                    <audio className='mx-auto mt-4' src={audioData?.link} controls autoPlay></audio>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-sm btn-circle btn-accent font-bold text-3xl text-white absolute right-2 top-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;