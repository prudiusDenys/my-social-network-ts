import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../../assets/images/user.png";
import {UsersObjType} from "../../../../redux/userReducer";
import {NavLink} from "react-router-dom";
import {Pagination} from "../../../../common/Pagination/Pagination";

type PropsType = {
	user: UsersObjType
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	followingProgress: [] | Array<number>
}

export const User = (props: PropsType) => {

	let user = props.user

	return (
		<div>
					<span>
						<div>
							<NavLink to={'/profile/' + user.id}>
								<img src={user.photos.small !== null ? user.photos.small : userPhoto} alt=""
										 className={classes.userPhoto}/>
							</NavLink>
						</div>
						<div>
							{
								user.followed
									? <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
										props.unFollow(user.id)
									}}>Unfollow</button>
									: <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
										props.follow(user.id)
									}}>Follow</button>
							}
						</div>
					</span>
			<span>
						<span>
							<div>{user.name}</div>
							<div>{user.status}</div>
						</span>
						<span>
							<div>{'user.location.country'}</div>
							<div>{'user.location.city'}</div>
						</span>
					</span>
		</div>
	)
}