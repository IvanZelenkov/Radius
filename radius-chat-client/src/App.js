import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Login from "./scenes/login";
import Chat from "../src/scenes/chat";

function App() {
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");
	const [isLoggedIn, setLoggedIn] = useState(false);

	return (
		<AnimatePresence mode='wait'>
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
		</AnimatePresence>
	);
}

export default App;