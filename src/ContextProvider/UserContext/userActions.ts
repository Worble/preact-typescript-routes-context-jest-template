interface IUpdateNameAction {
	type: "UPDATE_NAME";
	payload: string;
}

interface IUpdateAgeAction {
	type: "UPDATE_AGE";
	payload: number;
}

export type UserAction = IUpdateNameAction | IUpdateAgeAction;
