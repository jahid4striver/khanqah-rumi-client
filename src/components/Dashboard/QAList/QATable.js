import React from 'react';
import { toast } from 'react-toastify';



const QATable = ({ qa, setUpdateQa, index}) => {

    const handleDeleteAudio= ()=>{
        const proceed= window.confirm('Ary You Sure Want To Delete')
        if(proceed){
            fetch(`https://madrumi.clearsoftwares.xyz/getanswer/${qa._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateQa(null)
                toast('Deleted Successful')

            })
        }
    }

    return (
        <tr className='hover'>
            <td>{index+1}</td>
            <td>{qa.question}</td>
            <td>{qa.answer_no}</td>
            <td>{qa.category}</td>
            <td>User</td>
            <td><label for="update-modal" onClick={()=>setUpdateQa(qa)} className='btn btn-primary btn-xs'>পরিবর্তন</label></td>
            <td><button onClick={handleDeleteAudio} className='btn btn-warning btn-xs'>মুছুন</button></td>
        </tr>
    );
};

export default QATable;