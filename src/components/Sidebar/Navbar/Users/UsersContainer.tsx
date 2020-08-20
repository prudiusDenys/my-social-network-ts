import React from "react";
import {connect} from "react-redux";
import {
	followAC,
	setCurrentPageAC,
	setUsersAC,
	setUsersTotalCountAC,
	unFollowAC,
	UsersObjType
} from "../../../../redux/userReducer";
import axios from "axios";
import Users from "./Users";

export type ReactComponentType = {
	users: Array<UsersObjType>
	setUsers: (users: Array<UsersObjType>) => void
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setCurrentPage:(pageNumber:number)=>void
	pageSize: number
	totalUsersCount: number
	currentPage: number
	setTotalUsersCount: (totalCount:number)=>void
}

class UsersContainer extends React.Component<ReactComponentType> {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}
	onPageChanged = (pageNumber : number) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			})
	}
	render() {
		return <Users totalUsersCount={this.props.totalUsersCount}
									pageSize={this.props.pageSize}
									currentPage={this.props.currentPage}
									onPageChanged={this.onPageChanged}
									users={this.props.users}
									follow={this.props.follow}
									unFollow={this.props.unFollow}/>
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)