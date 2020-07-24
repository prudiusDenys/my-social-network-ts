import React from "react";
import classes from "./Profile.module.css";
import ProfileImage from "./ProfileImage/ProfileImage";
import ProfileNav from "./ProfileNav/ProfileNav";


const Profile = () => {
	return (
		<div className={classes.profile}>
			<ProfileImage/>
			<ProfileNav/>
		</div>
	)
}
export default Profile;