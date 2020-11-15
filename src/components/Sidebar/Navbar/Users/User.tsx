import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../../assets/images/user.png";
import {UsersObjType} from "../../../../redux/userReducer";
import {NavLink} from "react-router-dom";

type PropsType = {
	user: UsersObjType
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	followingProgress: [] | Array<number>
}

export const User = (props: PropsType) => {

	let user = props.user

	return (
		<div className={classes.users}>
			<div className={classes.usersContent}>
				<div className={classes.usersBlock}>
					<div>
						<NavLink to={'/profile/' + user.id}>
							<img src={user.photos.small !== null ? user.photos.small : userPhoto} alt=""
									 className={classes.userPhoto}/>
						</NavLink>
					</div>
					<div>
						{
							user.followed
								? <button className={classes.fBtn} disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
									props.unFollow(user.id)
								}}>Unfollow</button>
								: <button className={classes.fBtn} disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
									props.follow(user.id)
								}}>Follow</button>
						}
					</div>
				</div>
				<div className={classes.usersBlock}>
					<div>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</div>
					<span>
							<div>{'user.location.country'}</div>
							<div>{'user.location.city'}</div>
						</span>
				</div>
			</div>
		</div>
	)
}