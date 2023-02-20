import { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ messageList, username }) => {
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(scrollToBottom, [messageList]);

	return (
		<div className="chat-list">
			{messageList.map((message, idx) => (
				<MessageItem key={idx} message={message} username={username}/>
			))}
			<div ref={messagesEndRef}/>
		</div>
	);
};

export default MessageList;