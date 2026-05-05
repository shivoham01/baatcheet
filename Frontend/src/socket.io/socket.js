import { io } from "socket.io-client";

const URL = "https://baatcheet-2xgu.onrender.com"

export const socket = io(URL, {
  autoConnect: false,
});