import React from "react";
import classes from "./Profile.module.css";
import {ActionsTypes, PostDataType} from "../../../../redux/store";
import Posts from "./Posts/Posts";
import NewPostContainer from "./NewPost/NewPostContainer";

type propsType = {
	dispatch:(action: ActionsTypes)=>void
	postData: Array<PostDataType>
	inputValue: string
}
const Profile = (props: propsType) => {
	return (
		<div className={classes.profile}>
			<NewPostContainer dispatch={props.dispatch}
												inputValue = {props.inputValue}/>
			<Posts postData={props.postData}/>
		</div>
	)
}

export default Profile;