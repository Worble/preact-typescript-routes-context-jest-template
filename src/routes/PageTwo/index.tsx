import { ProductContext, ProductDispatchContext } from "ContextProvider/ProductContext";
import { useContext, useState } from "preact/hooks";

const ListProducts = () => {
	const { products } = useContext(ProductContext);
	const dispatch = useContext(ProductDispatchContext);
	return (
		<>
			<h1>Products</h1>
			<ul>
				{products.map((product, idx) => (
					<li>
						{product.name}&nbsp;&nbsp;
						<button
							onClick={() => {
								dispatch({ type: "REMOVE_PRODUCT", payload: idx });
							}}
						>
							x
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

const AddProduct = () => {
	const [name, updateName] = useState("");
	const dispatch = useContext(ProductDispatchContext);
	return (
		<>
			<label>
				Name:
				<input value={name} onInput={(event) => updateName(event.currentTarget.value)} />
			</label>
			<button
				onClick={() => {
					dispatch({ type: "ADD_PRODUCT", payload: { name } });
					updateName("");
				}}
			>
				Add
			</button>
		</>
	);
};

const PageTwo = () => {
	return (
		<>
			<ListProducts />
			<AddProduct />
		</>
	);
};

export default PageTwo;
