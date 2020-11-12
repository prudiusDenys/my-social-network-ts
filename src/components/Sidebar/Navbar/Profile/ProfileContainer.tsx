import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../../../redux/profileReducer";
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
	"website": string,
	"vk": string,
	"twitter": string,
	"instagram": string,
	"youtube": string,
	"github": string,
	"mainLink": string
}
type PhotosType = {
	small: string
	large: string
}

type ReactComponentType = {
	DataProfileUserIdType: DataProfileUserIdType
}

class ProfileContainer extends React.Component<any, any> {

	refreshProfile() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authorizedUserId
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
		if(this.props.match.params.userId !== this.props.match.params.userId){
			this.refreshProfile()
		}
	}

	render() {
		return <Profile profile={this.props.profile}
										status={this.props.status}
										updateStatus={this.props.updateStatus}
										isOwner={!this.props.match.params.userId}
										savePhoto={this.props.savePhoto}
										saveProfile={this.props.saveProfile}/>
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

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile})(WithUrlDataContainerComponent);