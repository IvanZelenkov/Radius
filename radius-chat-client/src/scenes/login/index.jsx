import { motion } from "framer-motion";

const Login = ({ room, setRoom, username, setUsername, setLoggedIn }) => {

	const checkForLogin = (event) => {
		event.preventDefault();

		if (room === "" || username === "")
			alert("Fill the required fields");
		else
			setLoggedIn(true);
	};

	return (
		<motion.div exit={{ opacity: 0 }}>
			<section id="entry-page">
				<form onSubmit={checkForLogin}>
					<h2>R A D I U S</h2>
					<fieldset>
						<legend>3 6 0 &#176;</legend>
						<ul>
							<li>
								<label>Room:</label>
								<input
									type="text"
									required
									onChange={(event) => setRoom(event.target.value)}
								/>
							</li>
							<li>
								<label>Username:</label>
								<input
									type="text"
									required
									onChange={(event) => setUsername(event.target.value)}
								/>
							</li>
						</ul>
					</fieldset>
					<button type="submit">Enter</button>
				</form>
			</section>
		</motion.div>
	);
};

export default Login;