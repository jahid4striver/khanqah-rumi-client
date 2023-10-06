import JoinRoom from './JoinRoom'
import Room from './Room';
import './styles.css'
import bg5 from '../../../assets/images/bg5.jpg'
import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';

const MobileLive = () => {
    // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    // const audioUrl = 'http://128.140.52.151:8000/stream';

    // // Combine the CORS Anywhere URL with your audio URL
    // const proxyAudioUrl = corsAnywhereUrl + audioUrl;


    //style="color:;display:block;font-family:Helvetica,sans-serif;font-size:11px;text-align:left;padding: 4px 0;"
    const isConnected = useHMSStore(selectIsConnectedToRoom)
    return (
        <div style={{ backgroundImage: `url(${bg5})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='flex flex-col justify-center items-center h-screen'>
            <h1 style={{ marginTop: '-20px' }} className='text-xl border-b-4 border-white font-bold inline-block text-white'>লাইভ বয়ান</h1><br />
            <audio src='http://128.140.52.151:8000/stream' controls />
            {/* <iframe src="https://khanqaherumi.mixlr.com/embed" frameborder="0" scrolling="no" height="300px" width="300px"></iframe> */}
            <h1 className='text-white mt-4' >বিঃদ্রঃ লাইভ শোনার সময় অ্যাপস এর অন্য কোথাও যাওয়া যাবে না তবে অ্যাপস মিনিমাইজ করে মোবাইলের অন্য কাজ করা যাবে</h1>
            {/* {isConnected
                ? <Room />
                : <JoinRoom />
            } */}
        </div>
    );
}

export default MobileLive;

// import JoinRoom from './JoinRoom';
// import Room from './Room';
// import './styles.css';
// import bg5 from '../../../assets/images/bg5.jpg';

// const MobileLive = () => {
//     return (
//         <div style={{ backgroundImage: `url(${bg5})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='flex flex-col justify-center items-center h-screen'>
//             <h1 style={{ marginTop: '-20px' }} className='text-xl border-b-4 border-white font-bold inline-block text-white'>লাইভ বয়ান</h1><br />
//             {/* Use an <iframe> to embed the audio stream */}
//             <iframe src='http://128.140.52.151:8000/stream' width="100%" height="60" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
//             <h1 className='text-white mt-4' >বিঃদ্রঃ লাইভ শোনার সময় অ্যাপস এর অন্য কোথাও যাওয়া যাবে না তবে অ্যাপস মিনিমাইজ করে মোবাইলের অন্য কাজ করা যাবে</h1>
//             {/* You can include your Room and JoinRoom components here */}
//         </div>
//     );
// }

// export default MobileLive;


// import JoinRoom from './JoinRoom';
// import Room from './Room';
// import './styles.css';
// import bg5 from '../../../assets/images/bg5.jpg';

// const MobileLive = () => {
//     return (
//         <div style={{ backgroundImage: `url(${bg5})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='flex flex-col justify-center items-center h-screen'>
//             <h1 style={{ marginTop: '-20px' }} className='text-xl border-b-4 border-white font-bold inline-block text-white'>লাইভ বয়ান</h1><br />
//             {/* Use an <iframe> to embed the audio stream with full width */}
//             <iframe src='http://128.140.52.151:8000/stream' width="100%" height="60" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
//             <h1 className='text-white mt-4' >বিঃদ্রঃ লাইভ শোনার সময় অ্যাপস এর অন্য কোথাও যাওয়া যাবে না তবে অ্যাপস মিনিমাইজ করে মোবাইলের অন্য কাজ করা যাবে</h1>
//             {/* You can include your Room and JoinRoom components here */}
//         </div>
//     );
// }

// export default MobileLive;


