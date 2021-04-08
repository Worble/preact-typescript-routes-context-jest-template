import { ProductContext, ProductDispatchContext } from "ContextProvider/ProductContext";
import { useContext, useState } from "preact/hooks";
import { Container } from "react-bootstrap";

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
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: "ADD_PRODUCT", payload: { name } });
				updateName("");
			}}
		>
			<label>
				Name:
				<input value={name} onInput={(event) => updateName(event.currentTarget.value)} />
			</label>
			<button>Add</button>
		</form>
	);
};

const PageTwo = () => {
	return (
		<Container>
			<ListProducts />
			<AddProduct />
		</Container>
	);
};

export default PageTwo;
