import { createContext, useContext, useEffect, useState } from "react";
import { socket } from "../socket.io/socket";

const MessageContext = createContext();

// ✅ Provider
export const MessageProvider = ({ children }) => {
  const [msg, setMsg] = useState([]);
  const [myID, setMyID] = useState("");

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      setMyID(socket.id);
    })

    socket.on("receive_message", (data) => {
      setMsg((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
      socket.disconnect();
    };
  }, []);

  return (
    <MessageContext.Provider value={{ msg, myID }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => {
  return useContext(MessageContext);
};