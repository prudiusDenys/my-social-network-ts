import React from "react";
import {UsersObjType} from "../../../../redux/userReducer";
import {Pagination} from "../../../../common/Pagination/Pagination";
import {User} from "./User";

type PropsType = {
	users: Array<UsersObjType>
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	followingProgress: [] | Array<number>
}

let Users = (props: PropsType) => {
	return <>
			<Pagination currentPage={props.currentPage}
									onPageChanged={props.onPageChanged}
									pageSize={props.pageSize}
									totalUsersCount={props.totalUsersCount}/>
			{props.users.map(u => <User key={u.id}
																	 unFollow={props.unFollow}
																	 follow={props.follow}
																	 user={u}
																	 followingProgress={props.followingProgress}/>)}
	</>
}

export default Users