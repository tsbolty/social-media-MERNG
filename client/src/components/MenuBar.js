import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MenuBar = () => {
	const pathname = window.location.pathname;
	const path = pathname === "/" ? "home" : pathname.substr(1);
	const [activeItem, setActiveItem] = useState(path);

	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu pointing secondary size='massive' color='teal'>
			<Menu.Item
				name='home'
				active={activeItem === "home"}
				onClick={handleItemClick}
				as={Link}
				to='/'>
				Home
			</Menu.Item>
			<Menu.Item
				name='register'
				active={activeItem === "register"}
				onClick={handleItemClick}
				as={Link}
				to='/register'>
				Register
			</Menu.Item>

			<Menu.Item
				name='login'
				active={activeItem === "login"}
				onClick={handleItemClick}
				as={Link}
				to='/login'>
				Login
			</Menu.Item>
		</Menu>
	);
};

export default MenuBar;
