// import React, { useRef, useEffect } from 'react';
// import SimplePeer from 'simple-peer';

// function WebRTCComponent() {
//   const localVideoRef = useRef();
//   const remoteVideoRef = useRef();
//   let peer = null;

//   useEffect(() => {
//     // Check if getUserMedia is supported by the browser
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//         .then((stream) => {
//           // Display local video stream
//           localVideoRef.current.srcObject = stream;

//           // Create a peer connection
//           peer = new SimplePeer({
//             initiator: true, // Initiator starts the connection
//             stream: stream,
//           });

//           // Listen for data channel messages
//           peer.on('data', (data) => {
//             console.log('Received data:', data);
//           });

//           // Display remote video stream when received
//           peer.on('stream', (remoteStream) => {
//             remoteVideoRef.current.srcObject = remoteStream;
//           });

//           // Handle errors
//           peer.on('error', (err) => {
//             console.error('Peer error:', err);
//           });
//         })
//         .catch((err) => {
//           console.error('getUserMedia error:', err);
//         });
//     } else {
//       console.error('getUserMedia is not supported');
//     }
//   }, []);

//   return (
//     <div>
//       <video ref={localVideoRef} autoPlay muted playsInline />
//       <video ref={remoteVideoRef} autoPlay playsInline />
//     </div>
//   );
// }

// export default WebRTCComponent;
