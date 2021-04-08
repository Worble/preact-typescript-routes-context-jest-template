import AppNavbar from "components/AppNavbar";
import Loading from "components/Loading";
import ContextProvider from "ContextProvider";
import AsyncRoute from "preact-async-route";
import Router from "preact-router";

const App = () => {
	return (
		<ContextProvider>
			<AppNavbar />
			<Router>
				<AsyncRoute
					path="/"
					getComponent={async () => {
						const module = await import("./routes/Home");
						return module.default;
					}}
					loading={Loading}
				/>
				<AsyncRoute
					path="/page-1"
					getComponent={async () => {
						const module = await import("./routes/PageOne");
						return module.default;
					}}
					loading={Loading}
				/>
				<AsyncRoute
					path="/page-2/"
					getComponent={async () => {
						const module = await import("./routes/PageTwo");
						return module.default;
					}}
					loading={Loading}
				/>
			</Router>
		</ContextProvider>
	);
};

export default App;
