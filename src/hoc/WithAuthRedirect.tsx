import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state: any) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export const WithAuthRedirect = (Component: any) => {
	class RedirectComponent extends React.Component<any, any> {
		render() {
			if (!this.props.isAuth) {
				return <Redirect to={'/login'}/>
			}
			return <Component {...this.props} />
		}
	}

	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

	return ConnectedAuthRedirectComponent
}