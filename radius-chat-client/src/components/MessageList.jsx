import { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import { Box } from "@mui/material";

const MessageList = ({ messageList, username }) => {
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(scrollToBottom, [messageList]);

	return (
		<Box className="message_list">
			{messageList.map((message, idx) => (
				<MessageItem key={idx} message={message} username={username}/>
			))}
			<Box ref={messagesEndRef}/>
		</Box>
	);
};

export default MessageList;