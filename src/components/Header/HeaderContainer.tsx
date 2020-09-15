import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";
import {rootReducers} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {

	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		return (
			<Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
		)
	}
}

const mapStateToProps = (state: rootReducers) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);