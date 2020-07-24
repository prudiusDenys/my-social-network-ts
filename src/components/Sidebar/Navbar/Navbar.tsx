import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<ul className={classes.navList}>
				<li className={classes.item}><NavLink to="/profile" className={classes.navLink}
																							activeClassName={classes.active}>Profile</NavLink></li>
				<li className={classes.item}><NavLink to="/dialogs" className={classes.navLink}
																							activeClassName={classes.active}>Messages</NavLink></li>
				<li className={classes.item}><NavLink to="/news" className={classes.navLink}
																							activeClassName={classes.active}>News</NavLink></li>
				<li className={classes.item}><NavLink to="/music" className={classes.navLink}
																							activeClassName={classes.active}>Music</NavLink></li>
				<li className={classes.item}><NavLink to="/settings" className={classes.navLink}
																							activeClassName={classes.active}>Settings</NavLink></li>
			</ul>
		</div>
	)
};

export default Navbar;