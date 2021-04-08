import { Reducer } from "preact/hooks";
import IProductState from "./IProductState";
import ProductAction from "./ProductAction";

export const productReducer: Reducer<IProductState, ProductAction> = (state, action) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			return {
				...state,
				products: state.products.concat(action.payload),
			};
		case "REMOVE_PRODUCT":
			var products = state.products.slice();
			products.splice(action.payload, 1);
			return {
				...state,
				products: products,
			};
		default:
			return state;
	}
};
