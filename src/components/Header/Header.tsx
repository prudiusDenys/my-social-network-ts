import React from "react";
import classes from './Header.module.css'
import HeaderSearch from "./Search/HeaderSearch";
import HeaderProfileLink from "./HeaderProfileLink/HeaderProfileLink";
import {NavLink} from "react-router-dom";

type PropsType = {
	isAuth: boolean
	login: string
	logout: any
}

const Header = (props: PropsType) => {
	return (
		<div className={classes.header}>
			<div className={classes.homeLink}>
				<a href="#">HOME</a>
				{
					props.isAuth &&
          <div className={classes.profileLink}>
            <HeaderProfileLink/>
          </div>
				}
			</div>
			<div className={classes.logo}>
				DENZIMM Social Network
			</div>
			<div className={classes.loginBlock}>
				{props.isAuth ?
					<div>
						{props.login} - <button className={classes.logOutBtn} onClick={props.logout}> Log out </button>
					</div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
			<HeaderSearch/>
		</div>
	)
}

export default Header;