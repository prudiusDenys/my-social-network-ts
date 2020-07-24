import React from "react";
import classes from "./ProfileNav.module.css";
import ProfileEdit from "../ProfileEdit/ProfileEdit";


const ProfileNav = ()=>{
	return(
		<div className={classes.profileNav}>
			<ul className={classes.navList}>
				<li className={classes.item}><a href="#" className={classes.navLink}>TimeLine</a></li>
				<li className={classes.item}><a href="#" className={classes.navLink}>About</a></li>
				<li className={classes.item}><a href="#" className={classes.navLink}>Photos</a></li>
				<li className={classes.item}><a href="#" className={classes.navLink}>Friends</a></li>
			</ul>
			<ProfileEdit/>
		</div>
	)
}
export default ProfileNav;