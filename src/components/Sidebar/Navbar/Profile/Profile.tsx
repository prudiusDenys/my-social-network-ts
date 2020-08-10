import React from "react";
import classes from "./Profile.module.css";
import Posts from "./Posts/Posts";
import NewPostContainer from "./NewPost/NewPostContainer";


const Profile = () => {
	return (
		<div className={classes.profile}>
			<NewPostContainer/>
			<Posts/>
		</div>
	)
}

export default Profile;