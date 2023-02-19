import { Box, TextField, Button } from "@mui/material";

const Login = ({ room, setRoom, username, setUsername, setLoggedIn }) => {

	const checkForLogin = (event) => {
		event.preventDefault();

		if (room === "" || username === "")
			alert("Fill the required fields");
		else
			setLoggedIn(true);
	};

	return (
		<Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
			<Box className="login_form">
				<TextField
					id="outlined-basic"
					label="Room name"
					value={room}
					required={true}
					onChange={(event) => setRoom(event.target.value)}
				/>
				<TextField
					id="outlined-basic"
					label="Username"
					variant="outlined"
					value={username}
					required={true}
					onChange={(event) => setUsername(event.target.value)}
				/>
				<Button variant="contained" color={"success"} onSubmit={checkForLogin}>Login</Button>
			</Box>
		</Box>
	);
};

export default Login;