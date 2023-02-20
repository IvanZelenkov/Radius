import { useEffect, useState } from "react";
import { RiSendPlaneLine, RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import MessageList from "../../components/MessageList";
import { useFetch } from "../../hooks/useFetch";
import { useSocket } from "../../hooks/useSocket";

const Chat = ({ room, username }) => {
	const { socketResponse, sendData } = useSocket(room, username);
	const [messageInput, setMessageInput] = useState("");
	const [messageList, setMessageList] = useState([]);
	const { responseData, infoLoaded } = useFetch("/message/" + room);

	useEffect(() => {
		if (responseData !== null) {
			setMessageList([...responseData, ...messageList]);
		}
	}, [responseData]);

	const addMessageToList = (socketResponse) => {
		if (socketResponse.room === "")
			return;

		setMessageList([...messageList, socketResponse]);
	};

	useEffect(() => {
		console.log("Socket Response: ", socketResponse);
		addMessageToList(socketResponse);
	}, [socketResponse]);

	const sendMessage = (event) => {
		event.preventDefault();
		if (messageInput !== "") {
			sendData({ content: messageInput });
			addMessageToList({
				content: messageInput,
				username: username,
				createdDateTime: new Date(),
				messageType: "CLIENT",
			});
			setMessageInput("");
		}
	};

	if (infoLoaded === false || responseData === null) {
		return (
			<>
			</>
		);
	}
	return (
		<motion.div exit={{ opacity: 0 }}>
			<div className="chat-root">
				<div className="chat-header">
					<span className="room-name-label">
						Room:<span className="room-name"> {room}</span>
					</span>
					<span className="user-name-label">
						Username:<span className="user-name"> {username}</span>
					</span>
				</div>
				<div className="chat-component">
					<MessageList username={username} messageList={messageList} />
					<form className="chat-input" onSubmit={(event) => sendMessage(event)}>
						<input
							type="text"
							value={messageInput}
							onChange={(event) => setMessageInput(event.target.value)}
							placeholder="Type a message"
						/>
						<button type="submit" className="send-message-button">
							{messageInput === "" ? (
								<RiSendPlaneLine size={25}/>
							) : (
								<RiSendPlaneFill color="white" size={25}/>
							)}
						</button>
					</form>
				</div>
			</div>
		</motion.div>
	);
};

export default Chat;