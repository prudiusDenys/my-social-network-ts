import React from "react";
import {connect} from "react-redux";
import {
	follow, getUsers,
	setCurrentPage, toggleFollowingProgress,
	unFollow,
	UsersObjType
} from "../../../../redux/userReducer";
import Users from "./Users";
import Preloader from "../../../common/preloader/Preloader";
import {rootReducers} from "../../../../redux/redux-store";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type ReactComponentType = {
	users: Array<UsersObjType>
	setUsers: (users: Array<UsersObjType>) => void
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setCurrentPage: (pageNumber: number) => void
	pageSize: number
	totalUsersCount: number
	currentPage: number
	setTotalUsersCount: (totalCount: number) => void
	isFetching: boolean
	toggleIsFetching: (isFetching: boolean) => void
	toggleFollowingProgress: (isFetching: boolean) => void
	followingProgress: Array<number>

}

class UsersContainer extends React.Component<any> {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber: number) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
						 pageSize={this.props.pageSize}
						 currentPage={this.props.currentPage}
						 onPageChanged={this.onPageChanged}
						 users={this.props.users}
						 follow={this.props.follow}
						 unFollow={this.props.unFollow}
						 followingProgress={this.props.followingProgress}/>
		</>
	}
}

const mapStateToProps = (state: rootReducers) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingProgress: state.usersPage.followingProgress
	}
}

export default compose(
	WithAuthRedirect,
	connect(mapStateToProps, {follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers}))
	(UsersContainer)