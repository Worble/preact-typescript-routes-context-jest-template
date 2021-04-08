import { createContext, FunctionComponent } from "preact";
import { useReducer } from "preact/hooks";
import IProductState from "./IProductState";
import { ProductAction } from "./productActions";
import { productReducer } from "./productReducer";

const initialState: IProductState = {
	products: [],
};

export const ProductContext = createContext(initialState);

export const ProductDispatchContext = createContext<(action: ProductAction) => void>(() => {});

export const ProductContextProvider: FunctionComponent<{ productState?: IProductState }> = (
	props
) => {
	const [state, dispatch] = useReducer(productReducer, props.productState ?? initialState);

	return (
		<ProductContext.Provider value={state}>
			<ProductDispatchContext.Provider value={dispatch}>
				{props.children}
			</ProductDispatchContext.Provider>
		</ProductContext.Provider>
	);
};
