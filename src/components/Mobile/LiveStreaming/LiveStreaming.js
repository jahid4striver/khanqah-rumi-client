// import React, { useEffect, useRef, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import Peer from "simple-peer";
// import io from "socket.io-client";
// import "./App.css";

// // Replace Material-UI components with react-icons and other needed libraries
// import { FiPhone, FiCopy } from "react-icons/fi"; // Example icons

// const socket = io.connect("http://128.140.52.151:5000/");
// const LiveStreaming = () => {
//   const [me, setMe] = useState("");
//   const [stream, setStream] = useState();
//   const [receivingCall, setReceivingCall] = useState(false);
//   const [caller, setCaller] = useState("");
//   const [callerSignal, setCallerSignal] = useState();
//   const [callAccepted, setCallAccepted] = useState(false);
//   const [idToCall, setIdToCall] = useState("");
//   const [callEnded, setCallEnded] = useState(false);
//   const [name, setName] = useState("");
//   const myVideo = useRef();
//   const userVideo = useRef();
//   const connectionRef = useRef();

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//       setStream(stream);
//       myVideo.current.srcObject = stream;
//     });

//     socket.on("me", (id) => {
//       setMe(id);
//     });

//     socket.on("callUser", (data) => {
//       setReceivingCall(true);
//       setCaller(data.from);
//       setName(data.name);
//       setCallerSignal(data.signal);
//     });
//   }, []);

//   const callUser = (id) => {
//     const peer = new Peer({
//       initiator: true,
//       trickle: false,
//       stream: stream,
//     });
//     peer.on("signal", (data) => {
//       socket.emit("callUser", {
//         userToCall: id,
//         signalData: data,
//         from: me,
//         name: name,
//       });
//     });
//     peer.on("stream", (stream) => {
//       userVideo.current.srcObject = stream;
//     });
//     socket.on("callAccepted", (signal) => {
//       setCallAccepted(true);
//       peer.signal(signal);
//     });

//     connectionRef.current = peer;
//   };

//   const answerCall = () => {
//     setCallAccepted(true);
//     const peer = new Peer({
//       initiator: false,
//       trickle: false,
//       stream: stream,
//     });
//     peer.on("signal", (data) => {
//       socket.emit("answerCall", { signal: data, to: caller });
//     });
//     peer.on("stream", (stream) => {
//       userVideo.current.srcObject = stream;
//     });

//     peer.signal(callerSignal);
//     connectionRef.current = peer;
//   };

//   const leaveCall = () => {
//     setCallEnded(true);
//     connectionRef.current.destroy();
//   };

//   return (
//     <>
//       <h1 style={{ textAlign: "center", color: "#fff" }}>Zoomish</h1>
//       <div className="container">
//         <div className="video-container">
//           <div className="video">
//             {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
//           </div>
//           <div className="video">
//             {callAccepted && !callEnded ? (
//               <video playsInline ref={userVideo} autoPlay style={{ width: "300px" }} />
//             ) : null}
//           </div>
//         </div>
//         <div className="myId">
//           <input
//             id="filled-basic"
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{ marginBottom: "20px" }}
//           />
//           <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
//             <button
//               className="icon-button"
//               onClick={() => {
//                 navigator.clipboard.writeText(me);
//               }}
//             >
//               <FiCopy fontSize="20px" />
//             </button>
//           </CopyToClipboard>

//           <input
//             id="filled-basic"
//             type="text"
//             placeholder="ID to call"
//             value={idToCall}
//             onChange={(e) => setIdToCall(e.target.value)}
//           />
//           <div className="call-button">
//             {callAccepted && !callEnded ? (
//               <button className="end-call-button" onClick={leaveCall}>
//                 End

//                             </button>
//                         ) : (
//                             <Iconbutton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
//                                 <PhoneIcon fontSize="large" />
//                             </Iconbutton>
//                         )}
//                         {idToCall}
//                     </div>
//                 </div>
//                 <div>
//                     {receivingCall && !callAccepted ? (
//                         <div className="caller">
//                             <h1 >{name} is calling...</h1>
//                             <button variant="contained" color="primary" onClick={answerCall}>
//                                 Answer
//                             </button>
//                         </div>
//                     ) : null}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default LiveStreaming;


// import React, { useEffect, useRef } from 'react';
// import './App.css';

// function LiveStreaming() {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     const ws = new WebSocket('ws://localhost:5000');

//     ws.onopen = () => {
//       console.log('Connected to server');
//     };

//     ws.onmessage = (event) => {
//       // Assuming the server sends audio data as binary
//       const audioBlob = event.data;
//       const audioUrl = URL.createObjectURL(audioBlob);
//       audioRef.current.src = audioUrl;
//     };

//     ws.onclose = () => {
//       console.log('Connection closed');
//     };

//     return () => {
//       ws.close();
//     };
//   }, []);

//   return (
//     <div className="my-28">
//       <audio ref={audioRef} controls autoPlay />
//     </div>
//   );
// }

// export default LiveStreaming;