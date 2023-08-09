import React from 'react';
import { toast } from 'react-toastify';



const AudioTable = ({boyan, setUpdateAudio, index}) => {

    const handleDeleteAudio= ()=>{
        const proceed= window.confirm('Ary You Sure Want To Delete')
        if(proceed){
            fetch(`https://madrumi.clearsoftwares.xyz/getboyans/${boyan._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateAudio(null)
                toast('Deleted Successful')

            })
        }
    }

    return (
        <tr className='hover'>
            <td>{index+1}</td>
            <td>{boyan.date}</td>
            <td>{boyan.name}</td>
            <td>{boyan.category}</td>
            <td>{boyan?.subject}</td>
            <td>User</td>
            <td><label for="update-modal" onClick={()=>setUpdateAudio(boyan)} className='btn btn-primary btn-xs'>পরিবর্তন</label></td>
            <td><button onClick={handleDeleteAudio} className='btn btn-warning btn-xs'>মুছুন</button></td>
        </tr>
    );
};

export default AudioTable;