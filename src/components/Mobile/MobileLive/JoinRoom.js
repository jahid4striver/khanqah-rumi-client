import { React, useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function JoinRoom() {
  const ENDPOINT = process.env.REACT_APP_TOKEN_ENDPOINT
  const ROOM_ID = process.env.REACT_APP_ROOM_ID

  const [username, setUsername] = useState("")
  const [selectedRole, setSelectedRole] = useState("")
  const hmsActions = useHMSActions()

  // if(username==="jahid365"){
  //   setSelectedRole("broadcaster")
  // }else{
  //   setSelectedRole("hls-viewer")
  // }
  // console.log(selectedRole);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "jahid365") {
      const response = await fetch(`https://prod-in2.100ms.live/hmsapi/madrashaerumi.app.100ms.live/api/token`, {
        method: "POST",
        body: JSON.stringify({
          user_id: `${Date.now()}`,
          role: "broadcaster", //broadcaster, hls-viewer
          type: "app",
          room_id: "63abff91aac408cad8c05121",
        }),
      })
      const { token } = await response.json()
      // Joining the room
      hmsActions.join({
        userName: username,
        authToken: token,
      })
    } else {
      const response = await fetch(`https://prod-in2.100ms.live/hmsapi/madrashaerumi.app.100ms.live/api/token`, {
        method: "POST",
        body: JSON.stringify({
          user_id: `${Date.now()}`,
          role: "hls-viewer", //broadcaster, hls-viewer
          type: "app",
          room_id: "63abff91aac408cad8c05121",
        }),
      })
      const { token } = await response.json()
      // Joining the room
      hmsActions.join({
        userName: username,
        authToken: token,
      })
    }


  }

  return (
    <form className="flex flex-col justify-center rounded-lg w-80 mx-auto h-60 bg-white shadow-xl p-5" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">লাইভে জয়েন করুন</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">আপনার নাম ও ঠিকানা লিখুন যেমনঃ abdullah/dhaka</span>
        </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" required placeholder="আপনার নাম/ঠিকানা লিখুন" className="input input-bordered w-full max-w-xs" />
      </div>
      {/* <select
        type="text"
        required
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        placeholder='Select Role'
      >
        {
          username==="jahid365" ? <option>broadcaster</option>: <option>hls-viewer</option>
        }
      </select> */}
      <button className="btn bg-accent mt-4">জয়েন</button>
    </form>
  );
}

export default JoinRoom;