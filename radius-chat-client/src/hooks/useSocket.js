import { useCallback, useEffect, useState } from "react";
import * as socketIO from "socket.io-client";
import { SOCKET_BASE_URL } from "../constants/constants";

export const useSocket = (room, username) => {
	const [socket, setSocket] = useState();
	const [isConnected, setConnected] = useState(false);
	const [socketResponse, setSocketResponse] = useState({
		room: "",
		content: "",
		username: "",
		messageType: "",
		createdDateTime: "",
	});

	const sendData = useCallback(
		(payload) => {
			socket.emit("send_message", {
				room: room,
				content: payload.content,
				username: username,
				messageType: "CLIENT",
			});
		},
		[socket, room]
	);

	useEffect(() => {
		const SOCKET = socketIO(SOCKET_BASE_URL, {
			reconnection: false,
			query: `username=${username}&room=${room}`
		});
		setSocket(SOCKET);
		SOCKET.on("connect", () => setConnected(true));
		SOCKET.on("read_message", (response) => {
			setSocketResponse({
				room: response.room,
				content: response.content,
				username: response.username,
				messageType: response.messageType,
				createdDateTime: response.createdDateTime,
			});
		});
		return () => {
			SOCKET.disconnect();
		};
	}, [room]);

	return { socketResponse, isConnected, sendData };
};