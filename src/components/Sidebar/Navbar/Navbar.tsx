import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<ul className={classes.navList}>
				<NavLink to="/profile" className={classes.navLink}
																							activeClassName={classes.active}>Profile</NavLink>
				<NavLink to="/dialogs" className={classes.navLink}
																							activeClassName={classes.active}>Messages</NavLink>
				<NavLink to="/users" className={classes.navLink}
								 activeClassName={classes.active}>Users</NavLink>
				<NavLink to="/news" className={classes.navLink}
																							activeClassName={classes.active}>News</NavLink>
				<NavLink to="/music" className={classes.navLink}
																							activeClassName={classes.active}>Music</NavLink>
				<NavLink to="/settings" className={classes.navLink}
																							activeClassName={classes.active}>Settings</NavLink>
			</ul>
		</div>
	)
};

export default Navbar;