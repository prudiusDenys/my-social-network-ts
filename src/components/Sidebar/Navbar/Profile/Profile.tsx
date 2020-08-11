import React from "react";
import classes from "./Profile.module.css";
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";


const Profile = () => {
	return (
		<div className={classes.profile}>
			<NewPostContainer/>
			<PostsContainer />
		</div>
	)
}

export default Profile;