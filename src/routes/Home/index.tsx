import { UserContext, UserDispatchContext } from "ContextProvider/UserContext";
import { useContext } from "preact/hooks";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const DisplayUser = () => {
	const { name, age } = useContext(UserContext);
	return (
		<p>
			Hello {name}, you are {age} years old
		</p>
	);
};

const ChangeName = () => {
	const { name } = useContext(UserContext);
	const dispatch = useContext(UserDispatchContext);
	return (
		<label>
			Your Name:
			<input
				onInput={(event) =>
					dispatch({ type: "UPDATE_NAME", payload: event.currentTarget.value })
				}
				value={name}
			/>
		</label>
	);
};

const ChangeAge = () => {
	const { age } = useContext(UserContext);
	const dispatch = useContext(UserDispatchContext);
	return (
		<label>
			Your Age:
			<input
				type="number"
				onInput={(event) =>
					dispatch({ type: "UPDATE_AGE", payload: event.currentTarget.valueAsNumber })
				}
				value={age}
			/>
		</label>
	);
};

const Home = () => {
	return (
		<>
			<Jumbotron>
				<Container>
					<h1>Hello, world!</h1>
					<p>
						This is a simple hero unit, a simple jumbotron-style component for calling
						extra attention to featured content or information.
					</p>
					<p>
						<Button variant="primary">Learn more</Button>
					</p>
				</Container>
			</Jumbotron>
			<Container>
				<DisplayUser />
				<ChangeName />
				<ChangeAge />
			</Container>
		</>
	);
};

export default Home;
