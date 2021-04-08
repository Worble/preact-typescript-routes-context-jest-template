import { IProduct } from "./IProductState";

interface IAddProductAction {
	type: "ADD_PRODUCT";
	payload: IProduct;
}

interface IRemoveProductAction {
	type: "REMOVE_PRODUCT";
	payload: number;
}

export type ProductAction = IAddProductAction | IRemoveProductAction;
