import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../../redux/profileReducer";


export type DataProfileUserIdType = {
	aboutMe: string
	contacts: ContactsType
	"lookingForAJob": true,
	"lookingForAJobDescription": string
	"fullName": string
	"userId": number
	photos: PhotosType
}
type ContactsType = {
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

class ProfileContainer extends React.Component<any, any> {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				this.props.setUserProfile(response.data)
			})
	}

	render() {
		return (
			<Profile profile={this.props.profile}/>
		)
	}
}

let mapStateToProps = (state: any) => {
	return {
		profile: state.profile.profile
	}
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);