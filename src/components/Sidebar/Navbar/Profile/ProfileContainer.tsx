import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";


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
		return <Profile profile={this.props.profile}/>
	}
}


// compose(
// 	connect(mapStateToProps, {getUserProfile}),
// 	withRouter,
// 	WithAuthRedirect
// )(ProfileContainer)

let AuthRedirectComponent:any = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state: any) => {
	return {
		profile: state.profile.profile
	}
}

let WithUrlDataContainerComponent :any = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);