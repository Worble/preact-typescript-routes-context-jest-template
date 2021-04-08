import "@testing-library/jest-dom/extend-expect";
import { render as originalRender } from "@testing-library/preact";
import { UserContextProvider } from "ContextProvider/UserContext";
import IUserState from "ContextProvider/UserContext/IUserState";
import Home from ".";

const render = (state?: IUserState) => {
	return originalRender(
		<UserContextProvider userState={state}>
			<Home />
		</UserContextProvider>
	);
};

describe("Home", () => {
	test("should say Hello Bob", () => {
		const state: IUserState = {
			name: "Bob",
			age: 21,
		};
		const container = render(state);
		expect(container.getByText("Hello Bob, you are 21 years old")).toBeInTheDocument();
	});
});
