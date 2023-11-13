import React from 'react';
import {Offcanvas, Stack} from "react-bootstrap";
import useIsMobile from "../../utils/hooks/useIsMobile";
import NavItems from "./NavBar/NavItems";

const Layout = () => {
	const [show, setShow] = React.useState(false);
	const isMobile = useIsMobile();
	const showHamburger = () => setShow(prevState => !prevState);

	return (
		<section className="flex justify-center">
			<nav>
				<div style={{background: '#07273C'}}
					 className="d-flex justify-content-center align-items-center p-3 p-md-2">
					<h6 className="text-center text-light m-0 fs">
						<span>Телефон за резервации: </span>
						<i className="fa-solid fa-phone ms-2 me-2" />
						<span>
							(+359) 885 771 328
						</span>
					</h6>
					{isMobile && <i onClick={showHamburger} className="fa-solid fa-bars text-light ms-2 fs-5"></i>}
				</div>
				{!isMobile && (
					<NavItems/>
				)}
				<Offcanvas show={show} onHide={showHamburger} placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Къща за гости Становец</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Stack gap={3}>
							<NavItems/>
						</Stack>
					</Offcanvas.Body>
				</Offcanvas>
			</nav>
		</section>
	);
};

export default Layout;