import React from "react";
import classes from "./HeaderProfileLink.module.css";
import {useSelector} from "react-redux";
import {rootReducers} from "../../../redux/redux-store";
import Preloader from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const HeaderProfileLink = ()=>{


	const profile = useSelector<rootReducers, any>(state => state.profile)

	if (!profile.profile) {
		return <Preloader/>
	}


	return(
		<div className={classes.headerProfileLink}>
			<a href="#"><img src={profile.profile.photos.small ? profile.profile.photos.small : userPhoto} alt=""/></a>
		</div>
	)
}

export default HeaderProfileLink;