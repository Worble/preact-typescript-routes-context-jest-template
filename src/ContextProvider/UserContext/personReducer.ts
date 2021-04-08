import { Reducer } from "preact/hooks";
import IUserState from "./IUserState";
import UserAction from "./UserAction";

export const personReducer: Reducer<IUserState, UserAction> = (state, action) => {
	switch (action.type) {
		case "UPDATE_NAME":
			return {
				...state,
				name: action.payload,
			};
		case "UPDATE_AGE":
			return {
				...state,
				age: action.payload,
			};
		default:
			return state;
	}
};
