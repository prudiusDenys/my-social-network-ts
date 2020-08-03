import React from "react";
import classes from "./Profile.module.css";
import {ActionsTypes, PostDataType} from "../../../../redux/State";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

type propsType = {
	dispatch:(action: ActionsTypes)=>void
	postData: Array<PostDataType>
	inputValue: string
}
const Profile = (props: propsType) => {
	return (
		<div className={classes.profile}>
			<NewPost dispatch={props.dispatch} inputValue = {props.inputValue}/>
			<Posts postData={props.postData}/>
		</div>
	)
}

export default Profile;