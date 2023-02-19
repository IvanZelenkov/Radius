import { useState } from "react";
import Login from "./scenes/login";
import Chat from "../src/scenes/chat";
import { Box } from "@mui/material";

function App() {
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");
	const [isLoggedIn, setLoggedIn] = useState(false);

	return (
		<Box>
			{!isLoggedIn ? (
				<Login
					username={username}
					setUsername={setUsername}
					room={room}
					setRoom={setRoom}
					setLoggedIn={setLoggedIn}
				/>
			) : (
				<Chat room={room} username={username}/>
			)}
		</Box>
	);
}

export default App;