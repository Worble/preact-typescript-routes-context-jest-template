import { IProduct } from "./IProductState";

interface IAddProductAction {
	type: "ADD_PRODUCT";
	payload: IProduct;
}

interface IRemoveProductAction {
	type: "REMOVE_PRODUCT";
	payload: number;
}

type ProductAction = IAddProductAction | IRemoveProductAction;
export default ProductAction;
