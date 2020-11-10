import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../../common/preloader/Preloader";
import {DataProfileUserIdType} from "../ProfileContainer";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../../../assets/images/user.png";

type PropsType = {
	profile: DataProfileUserIdType
	status: any
	updateStatus: any
	isOwner: boolean
	savePhoto: (photo: any)=> void
}

export const ProfileInfo = (props: PropsType) => {
	if(!props.profile){
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.files){
			props.savePhoto(e.target.files[0]);
		}
	}

	return (
		<div>
				<div>
					<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fp7.hiclipart.com%2Fpreview%2F703%2F593%2F258%2Fpac-man-collection-3d-computer-graphics-clip-art-packman.jpg&imgrefurl=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-xdjca&tbnid=aZtdgwW0aIpYJM&vet=12ahUKEwjysqP3wrbrAhXItqQKHU70ATwQMygJegUIARCuAQ..i&docid=CpQPntaovCNugM&w=800&h=1186&q=packman&ved=2ahUKEwjysqP3wrbrAhXItqQKHU70ATwQMygJegUIARCuAQ" alt=""/>
				</div>
			<div>
				<img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} alt=""/>
				{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
			</div>
		</div>
	)
}