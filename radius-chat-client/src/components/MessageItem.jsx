import { Box, Typography } from "@mui/material";

const MessageItem = ({ message, username }) => {
	const type = message.messageType.toLowerCase();
	const self = message.username === username ? "_self" : "";

	const timeStampConverter = (time) => {
		const date = new Date(time);
		const minute = date.getMinutes();
		const hour = date.getHours();
		return `${hour}:${minute}`;
	};

	return (
		<Box className={"message_item_" + type + self}>
			{type !== "server" && self === "" && (
				<Typography className="message_item_username">{message.username}</Typography>
			)}
			<Box className={"message_content_" + type + self}>
				<Typography className="message_content_value">{message.content}</Typography>
				<Typography>{timeStampConverter(message.createdDateTime)}</Typography>
			</Box>
		</Box>
	);
};

export default MessageItem;