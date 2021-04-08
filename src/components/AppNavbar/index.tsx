import { UserContext } from "ContextProvider/UserContext";
import { Link } from "preact-router";
import { useContext } from "preact/hooks";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AppNavbar = () => {
	const { name } = useContext(UserContext);
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link class="nav-link" activeClassName="active" href="/">
							Home
						</Link>
						<Link class="nav-link" activeClassName="active" href="/page-1">
							Foo
						</Link>
						<Link class="nav-link" activeClassName="active" href="/page-2">
							Bar
						</Link>
					</Nav>
					<div>
						<p>Hello {name}</p>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
