import { FunctionComponent } from "preact";
import { ProductContextProvider } from "./ProductContext";
import IProductState from "./ProductContext/IProductState";
import { UserContextProvider } from "./UserContext";
import IUserState from "./UserContext/IUserState";

interface IContextProviderProps {
	userState?: IUserState;
	productState?: IProductState;
}

export const ContextProvider: FunctionComponent<IContextProviderProps> = (props) => {
	return (
		<UserContextProvider userState={props.userState}>
			<ProductContextProvider productState={props.productState}>
				{props.children}
			</ProductContextProvider>
		</UserContextProvider>
	);
};

export default ContextProvider;
