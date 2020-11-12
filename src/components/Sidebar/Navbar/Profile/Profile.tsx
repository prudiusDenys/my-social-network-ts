import React from "react";
import classes from "./Profile.module.css";
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DataProfileUserIdType} from "./ProfileContainer";

type PropsType = {
	profile: DataProfileUserIdType
	status: any
	updateStatus: any
	isOwner: boolean
	savePhoto: any
	saveProfile: any
}

const Profile = (props: PropsType) => {
	return (
		<div className={classes.profile}>
			<NewPostContainer/>
			<ProfileInfo profile={props.profile}
									 status={props.status}
									 updateStatus={props.updateStatus}
									 isOwner={props.isOwner}
									 savePhoto={props.savePhoto}
									 saveProfile={props.saveProfile}/>
			<PostsContainer/>
		</div>
	)
}

export default Profile;