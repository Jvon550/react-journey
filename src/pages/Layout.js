import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Stack, Container } from "react-bootstrap";
import fb from "../img/facebook.png";
const Layout = () => {
	return (
		<Container Fluid>
			<Stack direction="horizontal" gap={3}>
				<div>
					<img src={fb} alt="" style={{ height: "48px", margin: "20px" }} />
				</div>
				<Nav defaultActiveKey="/" as="ul" className=" ms-auto">
					<Nav.Item as="li">
						<Nav.Link href="/">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="/blogs">Blogs</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav.Item>
				</Nav>
			</Stack>
			<div style={{ height: "100px" }}></div>
			<Outlet />
		</Container>
	);
};

export default Layout;
