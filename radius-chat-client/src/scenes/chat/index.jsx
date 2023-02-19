import { useEffect, useState } from "react";
import { RiSendPlaneLine, RiSendPlaneFill } from "react-icons/ri";
import MessageList from "../../components/MessageList";
import { useFetch } from "../../hooks/useFetch";
import { useSocket } from "../../hooks/useSocket";

const Chat = ({ room, username }) => {
	const { socketResponse, sendData } = useSocket(room, username);
	const [messageInput, setMessageInput] = useState("");
	const [messageList, setMessageList] = useState([]);
	const { responseData, infoLoaded } = useFetch("/message/" + room);

	useEffect(() => {
		if (responseData !== undefined) {
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
		<div className="message_root_div">
			<span className="room_name">Room: {room}</span>
			<span className="user_name">Welcome: {username}</span>
			<div className="message_component">
				<MessageList username={username} messageList={messageList} />
				<form className="chat-input" onSubmit={(event) => sendMessage(event)}>
					<input
						type="text"
						value={messageInput}
						onChange={(event) => setMessageInput(event.target.value)}
						placeholder="Type a message"
					/>
					<button type="submit">
						{messageInput === "" ? (
							<RiSendPlaneLine size={25}/>
						) : (
							<RiSendPlaneFill color="#2671ff" size={25}/>
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Chat;