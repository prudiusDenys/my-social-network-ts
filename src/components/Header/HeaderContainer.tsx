import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";
import {rootReducers} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
			{withCredentials: true})
			.then(response => {
					if(response.data.resultCode === 0){
						let {id, email, login} = response.data.data
						this.props.setUserData(id, email, login)
					}
			})
	}

	render() {
		return (
			<Header isAuth={this.props.isAuth} login={this.props.login}/>
		)
	}
}

const mapStateToProps = (state : rootReducers) => ({
		isAuth: state.auth.isAuth,
			login: state.auth.login
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer) ;