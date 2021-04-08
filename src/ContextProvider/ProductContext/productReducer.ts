import { Reducer } from "preact/hooks";
import IProductState from "./IProductState";
import { ProductAction } from "./productActions";

export const productReducer: Reducer<IProductState, ProductAction> = (state, action) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			return {
				...state,
				products: state.products.concat(action.payload),
			};
		case "REMOVE_PRODUCT":
			var copy = state.products.slice();
			copy.splice(action.payload, 1);
			return {
				...state,
				products: copy,
			};
		default:
			return state;
	}
};
