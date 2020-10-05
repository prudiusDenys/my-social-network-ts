import React from "react";
import Preloader from "../../../../common/preloader/Preloader";
import {DataProfileUserIdType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";

type PropsType = {
	profile: DataProfileUserIdType
	status: any
	updateStatus: any
}

export const ProfileInfo = (props: PropsType) => {
	if(!props.profile){
		return <Preloader/>
	}
	return (
		<div>
				<div>
					<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fp7.hiclipart.com%2Fpreview%2F703%2F593%2F258%2Fpac-man-collection-3d-computer-graphics-clip-art-packman.jpg&imgrefurl=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-xdjca&tbnid=aZtdgwW0aIpYJM&vet=12ahUKEwjysqP3wrbrAhXItqQKHU70ATwQMygJegUIARCuAQ..i&docid=CpQPntaovCNugM&w=800&h=1186&q=packman&ved=2ahUKEwjysqP3wrbrAhXItqQKHU70ATwQMygJegUIARCuAQ" alt=""/>
				</div>
			<div>
				<img src={props.profile.photos.large} alt=""/>
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
			</div>
		</div>
	)
}