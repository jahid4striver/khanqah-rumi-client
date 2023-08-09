import React from 'react';
import { toast } from 'react-toastify';



const AudioTable = ({ kobita, setUpdateKobita, index}) => {

    const handleDeleteAudio= ()=>{
        const proceed= window.confirm('Ary You Sure Want To Delete')
        if(proceed){
            fetch(`https://madrumi.clearsoftwares.xyz/getkobita/${kobita._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateKobita(null)
                toast('Deleted Successful')

            })
        }
    }

    return (
        <tr className='hover'>
            <td>{index+1}</td>
            <td>{kobita.name}</td>
            <td>{kobita.writer}</td>
            <td>{kobita.singer}</td>
            <td>{kobita.date_time}</td>
            <td>User</td>
            <td><label for="update-modal" onClick={()=>setUpdateKobita(kobita)} className='btn btn-primary btn-xs'>পরিবর্তন</label></td>
            <td><button onClick={handleDeleteAudio} className='btn btn-warning btn-xs'>মুছুন</button></td>
        </tr>
    );
};

export default AudioTable;