import React, { useEffect, useRef } from 'react'
import { useMessages } from "../context api/messageContext";

const Messages = () => {
  const { msg, myID } = useMessages();
  const bottomRef = useRef(null);

  useEffect(() => {
    if (msg.length > 3) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [msg]); // 👈 run on every new message

  return (
    <div className="flex-1 w-full min-h-screen text-[#353333] px-2 mt-16 pt-2 bg-[#ECE5DD] overflow-y-auto pb-17" id="messages">
      {msg.map((message, index) => {
        const isMe = message.sender === myID;
        return (
          <div key={index} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
            <p className={`w-auto h-auto inline-block m-1 mb-2 p-2 rounded ${isMe ? "bg-[#DCF8C6]" : "bg-[#FFFFFF]"}`}>
              {message.text}
            </p>
          </div>
        )
      })}

      {/* 👇 invisible div for auto scroll */}
      <div ref={bottomRef}></div>
    </div>
  )
}

export default Messages;