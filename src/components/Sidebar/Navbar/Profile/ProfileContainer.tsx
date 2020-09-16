import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";


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
			userId = this.props.authorizedUserId
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId)
	}

	render() {
		return <Profile profile={this.props.profile}
										status={this.props.status}
										updateStatus={this.props.updateStatus}/>
	}
}


// compose(
// 	connect(mapStateToProps, {getUserProfile}),
// 	withRouter,
// 	WithAuthRedirect
// )(ProfileContainer)


let mapStateToProps = (state: any) => {
	return {
		profile: state.profile.profile,
		status: state.profile.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth
	}
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(WithUrlDataContainerComponent);