import React from 'react';
import NavItem from "./NavItem/NavItem";
import {Nav} from "react-bootstrap";
import {navBarItemsProps} from "../../../constants";

const NavItems = () => {
	return (
		<Nav className="d-flex flex-column flex-md-row justify-content-center mt-md-5 mb-5" activeKey='/'>
			{navBarItemsProps.map((item, index) => {
				return <NavItem
					key={index}
					type={item.type as 'link' | 'dropdown'}
					dropdownLinks={item.type === 'dropdown' && item.dropdownLinks ? item.dropdownLinks : null}
					name={item.name}
					path={item.path}
					iconName={item.iconName}
				/>
			})}
		</Nav>
	);
};

export default NavItems;