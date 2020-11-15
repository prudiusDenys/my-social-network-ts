import React from "react";
import classes from "./Avatar.module.css";
import userPhoto from "../../assets/images/user.png";
import {useSelector} from "react-redux";
import {rootReducers} from "../../redux/redux-store";
import Preloader from "../../components/common/preloader/Preloader";



const Avatar = ()=>{

	const profile = useSelector<rootReducers, any>(state => state.profile)

	if (!profile.profile) {
		return <Preloader/>
	}


	return(
		<div className={classes.avatar}>
			<img src={profile.profile.photos.small ? profile.profile.photos.small : userPhoto} alt=""/>
		</div>
	)
}

export default Avatar;