import React from "react";
import classes from "./Profile.module.css";
import {PostDataType} from "../../../../redux/State";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";


type propsType = {
	postData: Array<PostDataType>
}
const Profile = (props: propsType) => {
	return (
		<div className={classes.profile}>
			<NewPost/>
			<Posts postData={props.postData}/>
		</div>
	)
}

export default Profile;