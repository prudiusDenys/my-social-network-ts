import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../../redux/profileReducer";
import {withRouter, Redirect} from "react-router-dom";


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
	DataProfileUserIdType: DataProfileUserIdType
}

class ProfileContainer extends React.Component<any, any> {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 2
		}
		this.props.getUserProfile(userId);
	}

	render() {
		if (!this.props.isAuth) {
			return <Redirect to={'/login'}/>
		}
		return <Profile profile={this.props.profile}/>
	}
}

let mapStateToProps = (state: any) => {
	return {
		profile: state.profile.profile,
		isAuth: state.auth.isAuth
	}
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);