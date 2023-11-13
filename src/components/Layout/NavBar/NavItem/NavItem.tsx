import React from 'react';
import {Dropdown, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

import './styles.scss';

type NavItemProps = {
	type: 'dropdown' | 'link'

	dropdownLinks?: {
		name: string,
		path: string
	}[] | null,
	name: string,
	path: string,
	iconName: string
}

const NavItem = ({type, name, path, iconName, dropdownLinks}: NavItemProps) => {
	return (
		<>
			{type === 'link'
				? <Nav.Item className="nav-item">
					<Nav.Link className="ps-1 nav-item-link" as={Link} to={path}>
						<i className={`${iconName} me-2`}/>
						<span>
							{name}
						</span>
					</Nav.Link>
				</Nav.Item>
				: (
					<Dropdown className="nav-dropdown">
						<Dropdown.Toggle className="nav-dropdown-header" id="dropdown-basic">
							<i className={`${iconName} me-2`}/>
							<span>
								{name}
							</span>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{dropdownLinks && dropdownLinks.map((link, index) => {
								return <Nav.Link key={index}
												 className="ps-3 nav-item-link"
												 as={Link}
												 to={link.path}
								>
									{link.name}
								</Nav.Link>
							})}
						</Dropdown.Menu>
					</Dropdown>
				)
			}
		</>
	);
};

export default NavItem;