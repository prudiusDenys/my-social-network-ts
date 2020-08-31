import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {rootReducers} from "../../../../redux/redux-store";


export type DataProfileUserIdType = {
	aboutMe: string
	contacts: ContactsType
	"lookingForAJob": true,
	"lookingForAJobDescription": string
	"fullName": string
	"userId": number
	photos: PhotosType
}
export type ContactsType = {
	"facebook": string,
	"website": null,
	"vk": string,
	"twitter": string,
	"instagram": string,
	"youtube": null,
	"github": string,
	"mainLink": null
}
type PhotosType = {
	small: string
	large: string
}

type ReactComponentType = {
	DataProfileUserIdType:DataProfileUserIdType
}

class ProfileContainer extends React.Component<any, any> {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 2
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setUserProfile(response.data)
			})
	}

	render() {
		return <Profile profile={this.props.profile}/>
	}
}

let mapStateToProps = (state: any) => {
	return {
		profile: state.profile.profile
	}
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);