import React from "react";
import classes from "./Profile.module.css";
import {PostDataType} from "../../../../redux/State";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";


type propsType = {
	postData: Array<PostDataType>
	inputValue: string
	addPost: (inputValue: string | undefined)=> void
	onChangeInput: (onChangeInput: string)=> void
}
const Profile = (props: propsType) => {
	return (
		<div className={classes.profile}>
			<NewPost addPost={props.addPost} inputValue = {props.inputValue} onChangeInput={props.onChangeInput}/>
			<Posts postData={props.postData}/>
		</div>
	)
}

export default Profile;