import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
	followAC,
	setCurrentPageAC,
	setUsersAC,
	setUsersTotalCountAC,
	unFollowAC,
	UsersObjType
} from "../../../../redux/userReducer";

const mapStateToProps = (state: any) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		},
		setCurrentPage: (pageNumber:number)=>{
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount:number)=>{
			dispatch(setUsersTotalCountAC(totalCount))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)