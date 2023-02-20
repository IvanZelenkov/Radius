const MessageItem = ({ message, username }) => {
	const type = message.messageType.toLowerCase();
	const self = message.username === username ? "-self" : "";

	const timeStampConverter = (time) => {
		const date = new Date(time);
		const minute = date.getMinutes();
		const hour = date.getHours();
		if (minute < 10)
			return `${hour}:0${minute}`;
		else if (hour < 10)
			return `0${hour}:${minute}`;
		else if (minute < 10 && hour < 10)
			return `0${hour}:0${minute}`;
		else
			return `${hour}:${minute}`;
	};

	return (
		<div className={"chat-item-" + type + self}>
			{type !== "server" && self === "" && (
				<span className="chat-item-username">{message.username}</span>
			)}
			<div className={"chat-content-" + type + self}>
				<span className="chat-content-value">{message.content}</span>
				<span>{timeStampConverter(message.createdDateTime)}</span>
			</div>
		</div>
	);
};

export default MessageItem;