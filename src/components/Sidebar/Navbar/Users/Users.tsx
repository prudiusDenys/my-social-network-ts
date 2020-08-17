import userPhoto from "../../../../assets/images/user.png";
import classes from "./Users.module.css";
import React from "react";
import axios from "axios";
import {UsersObjType} from "../../../../redux/userReducer";

export type ReactComponentType = {
	users: Array<UsersObjType>
	setUsers: (users: Array<UsersObjType>) => void
	follow: (userId: number) => void
	unFollow: (userId: number) => void
}

class Users extends React.Component<ReactComponentType> {
	constructor(props: any) {
		super(props);
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}
	render() {
		return (
			<div>
				{
					this.props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={classes.userPhoto}/>
						</div>
						<div>
							{
								u.followed ?
									<button onClick={() => {this.props.follow(u.id)}}>Follow</button> :
									<button onClick={() => {this.props.unFollow(u.id)}}>Unfollow</button>
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
		)
	}
}

export default Users;