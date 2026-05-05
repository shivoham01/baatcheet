import { io } from "socket.io-client";

export const socket = io("https://baatcheet-2xgu.onrender.com", {
  autoConnect: false,
});