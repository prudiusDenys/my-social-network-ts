import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersObjType} from "../../../../redux/userReducer";

const mapStateToProps = (state: any) => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		follow: (userId: number) => {
			dispatch(followAC(userId))
		},
		unFollow: (userId: number) => {
			dispatch(unFollowAC(userId))
		},
		setUsers: (users:Array<UsersObjType>) => {
			dispatch(setUsersAC(users))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)