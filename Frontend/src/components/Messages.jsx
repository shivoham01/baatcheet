import React from 'react'
import { useMessages } from "../context api/messageContext";

const Messages = () => {
  const { msg, myID } = useMessages();
  return (
    <div>
      <div className="w-full min-h-147 text-[#353333] p-2 relative bg-[#ECE5DD]" id="messages">
        {msg.map((message, index) => {
          const isMe = message.sender === myID;
          return <div key={index} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
            <p className={`w-auto h-auto iniline-block m-2 p-2 rounded ${isMe ? "bg-[#DCF8C6]" : "bg-[#FFFFFF]"}`}>{message.text}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Messages