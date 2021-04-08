interface IUpdateNameAction {
	type: "UPDATE_NAME";
	payload: string;
}

interface IUpdateAgeAction {
	type: "UPDATE_AGE";
	payload: number;
}

type UserAction = IUpdateNameAction | IUpdateAgeAction;
export default UserAction;
