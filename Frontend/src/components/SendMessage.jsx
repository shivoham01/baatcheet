import React, { useEffect, useState } from 'react'
import { SendHorizontal } from 'lucide-react';
import { socket } from "../socket.io/socket";


const SendMessage = () => {
    const [input, setInput] = useState("");
    useEffect(() => {
        // connect manually
        socket.connect();

        // listen event
        socket.on("connect", () => {
            console.log("Connected:", socket.id);
        });

        socket.on("receive_message", (data) => {
            console.log("Message from server:", data);
        });

        // cleanup (VERY IMPORTANT)
        return () => {
            socket.off("connect");
            socket.off("message");
            socket.disconnect();
        };
    }, []);


    // Send Message Function
    const sendMessage = () => {
        socket.emit("send_message", {
            text: input,
            sender: socket.id
        })

        setInput("");
    }
    return (
        <div className='bottom-0 relative flex justify-between items-center bg-white'>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    sendMessage();
                }
            }} type="text" className='outline-none w-full p-2' placeholder='Type a message' />
            <button onClick={sendMessage} className='m-2 cursor-pointer bg-black text-white rounded-[50%] p-2'><SendHorizontal /></button>
        </div>
    )
}

export default SendMessage