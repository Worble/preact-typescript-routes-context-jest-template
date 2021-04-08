import { createContext, FunctionComponent } from "preact";
import { useReducer } from "preact/hooks";
import IUserState from "./IUserState";
import { personReducer } from "./personReducer";
import { UserAction } from "./userActions";

const initialState: IUserState = {
	name: "",
	age: 0,
};

export const UserContext = createContext(initialState);

export const UserDispatchContext = createContext<(action: UserAction) => void>(() => {});

export const UserContextProvider: FunctionComponent<{ userState?: IUserState }> = (props) => {
	const [state, dispatch] = useReducer(personReducer, props.userState ?? initialState);

	return (
		<UserContext.Provider value={state}>
			<UserDispatchContext.Provider value={dispatch}>
				{props.children}
			</UserDispatchContext.Provider>
		</UserContext.Provider>
	);
};
