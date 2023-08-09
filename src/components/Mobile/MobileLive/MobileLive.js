import JoinRoom from './JoinRoom'
import Room from './Room';
import './styles.css'
import bg5 from '../../../assets/images/bg5.jpg'
// import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';

const MobileLive = () => {
    //style="color:;display:block;font-family:Helvetica,sans-serif;font-size:11px;text-align:left;padding: 4px 0;"
    // const isConnected = useHMSStore(selectIsConnectedToRoom)
    return (
        <div style={{backgroundImage: `url(${bg5})`,backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} className='flex flex-col justify-center items-center h-screen'>
            <h1 style={{marginTop:'-20px'}} className='text-xl border-b-4 border-white font-bold inline-block text-white'>লাইভ বয়ান</h1><br />
            <iframe src="https://khanqaherumi.mixlr.com/embed" frameborder="0" scrolling="no" height="300px" width="300px"></iframe>
            <h1 className='text-white' >বিঃদ্রঃ লাইভ শোনার সময় অ্যাপস এর অন্য কোথাও যাওয়া যাবে না তবে অ্যাপস মিনিমাইজ করে মোবাইলের অন্য কাজ করা যাবে</h1>
            {/* {isConnected
                ? <Room />
                : <JoinRoom />
            } */}
        </div>
    );
}

export default MobileLive;