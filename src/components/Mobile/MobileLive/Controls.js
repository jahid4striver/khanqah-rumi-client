import { IconButton, Button } from '@mui/material';
import { selectHLSState, useHMSActions, useHMSStore } from '@100mslive/react-sdk'
import { selectIsLocalAudioEnabled, selectIsLocalVideoEnabled, selectLocalPeer } from '@100mslive/react-sdk'
import { IoVideocamOutline, IoVideocamOffOutline, IoMicOffOutline,IoLogOutOutline,IoStopCircleOutline } from 'react-icons/io5';
import { MdOutlineMicNone,MdOutlinePodcasts } from 'react-icons/md';

function Controls() {


  const hmsActions = useHMSActions()
  const hlsState = useHMSStore(selectHLSState)
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled)
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled)
  const localPeer = useHMSStore(selectLocalPeer)

  const startHLSStreaming = async () => {

    const API_KEY = "NDM0YjVhMDItYzI2MC00NTVmLWI5MjYtZmRiYWJhY2UyYzIz";
    const ONESIGNAL_APP_ID = "1daf2556-5bbc-44d3-956a-e56318d29698";
    const BASE_URL = "https://onesignal.com/api/v1";


    const sendNofification = () => {
        const body={
            app_id: ONESIGNAL_APP_ID,
            included_segments: ['Subscribed Users'],
            data: {
                foo: 'bar',
            },
            contents: {
                en: 'আরিফ বিল্লাহ হজরত মাওলানা মুফতি শফী সাহেব লাইভে আছেন, সবাই জয়েন করুন',
            },
        };

        fetch('https://onesignal.com/api/v1/notifications', {
            method: "POST",
            'url':BASE_URL,
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${API_KEY}`,
            },
            body: body ? JSON.stringify(body) : null

        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
        })
    }


    try {
      await hmsActions.startHLSStreaming()
      const data= {
        live:true
      }
      fetch(`https://madrumi.clearsoftwares.xyz/getlive/63c649e5160ba05ec6fb3e81`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            sendNofification();

    } catch (err) {
        alert(`failed to start hls ${err}`)
    }
  }

  const stopHLSStreaming = async () => { 
    try {
      await hmsActions.stopHLSStreaming()
      const data= {
        live:false
      }
      fetch(`https://madrumi.clearsoftwares.xyz/getlive/63c649e5160ba05ec6fb3e81`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    } catch (err) {
        alert(`failed to stop hls ${err}`)
    }
  }

  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!audioEnabled);
  }

  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!videoEnabled);
  }


  const leaveRoom = async () => {
    if(localPeer.roleName === 'broadcaster'){
      hmsActions.leave()
      await hmsActions.stopHLSStreaming()
    }else{
      hmsActions.leave()
    }
  }

  
  return (
    <div className='controls'>
      {localPeer.roleName === 'broadcaster'
        ? <>
            <IconButton onClick={toggleAudio}>
              {audioEnabled
                ? <MdOutlineMicNone />
                : <IoMicOffOutline />
              }
            </IconButton>
            <IconButton onClick={toggleVideo}>
              {videoEnabled
                ? <IoVideocamOutline />
                : <IoVideocamOffOutline />
              }
            </IconButton>
            <Button 
              variant="contained" 
              disableElevation
              className='leave'
              onClick={leaveRoom}
            >
              <IoLogOutOutline /> ত্যাগ করুন
            </Button>
            {hlsState.running
              ? <Button 
                  variant="contained" 
                  disableElevation
                  className='leave'
                  onClick={stopHLSStreaming}
                >
                  <IoStopCircleOutline /> লাইভ বন্ধ করুন
                </Button>
              : <Button 
                  variant="contained"
                  disableElevation
                  onClick={startHLSStreaming}
                >
                  <MdOutlinePodcasts /> লাইভ চালু করুন 
                </Button>
            }
          </>
        : <Button 
            variant="contained" 
            disableElevation
            className='leave'
            onClick={leaveRoom}
          >
            <IoLogOutOutline /> লাইভ ত্যাগ করুন
          </Button>
      }
    </div>
  )
}

export default Controls