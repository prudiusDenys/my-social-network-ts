import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {rootReducers} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {

	render() {
		return (
			<Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
		)
	}
}

const mapStateToProps = (state: any) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);