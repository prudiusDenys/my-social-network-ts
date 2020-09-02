import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../../assets/images/user.png";
import {UsersObjType} from "../../../../redux/userReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
	users: Array<UsersObjType>
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	toggleFollowingProgress: (isFetching: boolean, userId: number) => void
	followingProgress: [] | Array<number>
}

let Users = (props: PropsType) => {
	debugger

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages: Array<number> = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return <div>
		<div>
			{pages.map(p => {
				return <span key={p.toString()} className={props.currentPage === p ? classes.selectedPage : ''}
										 onClick={(e) => {
											 props.onPageChanged(p)
										 }}>{p}</span>
			})}
		</div>
		{
			props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={classes.userPhoto}/>
							</NavLink>
						</div>
						<div>
							{
								u.followed ?
									<button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
										props.toggleFollowingProgress(true, u.id)
										axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
											withCredentials: true,
											headers: {
												"API-KEY": "ceb21197-0d60-4a74-81f0-474168f197a3"
											}
										})
											.then(response => {
												if (response.data.resultCode === 0) {
													props.unFollow(u.id)
												}
												props.toggleFollowingProgress(false, u.id)
											})
									}}>Unfollow</button> :
									<button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
										props.toggleFollowingProgress(true, u.id)
										axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
											withCredentials: true,
											headers: {
												"API-KEY": "ceb21197-0d60-4a74-81f0-474168f197a3"
											}
										})
											.then(response => {
												if (response.data.resultCode === 0) {
													props.follow(u.id)
												}
												props.toggleFollowingProgress(false, u.id)
											})
									}}>Follow</button>
							}
						</div>
					</span>
				<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
			</div>)
		}
	</div>
}

export default Users