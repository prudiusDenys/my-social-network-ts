import React from "react";
import classes from './Header.module.css'
import HeaderSearch from "./Search/HeaderSearch";
import avatar from './avatar.jpg';
import HeaderProfileLink from "./HeaderProfileLink/HeaderProfileLink";

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.homeLink}>
				<a href="#">HOME</a>
			</div>
			<div className={classes.logo}>
				DENZIMM Social Network
			</div>
			<HeaderSearch/>
			<HeaderProfileLink/>
		</div>
	)
}

export default Header;