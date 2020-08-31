import React from "react";
import classes from './Header.module.css'
import HeaderSearch from "./Search/HeaderSearch";
import HeaderProfileLink from "./HeaderProfileLink/HeaderProfileLink";
import {NavLink} from "react-router-dom";

type PropsType = {
	isAuth: boolean
	login: string
}

const Header = (props: PropsType) => {
	return (
		<div className={classes.header}>
			<div className={classes.homeLink}>
				<a href="#">HOME</a>
			</div>
			<div className={classes.logo}>
				DENZIMM Social Network
			</div>
			<div className={classes.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
			</div>
			<HeaderSearch/>
			<HeaderProfileLink/>
		</div>
	)
}

export default Header;