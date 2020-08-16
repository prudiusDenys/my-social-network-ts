import React from "react";
import classes from "./Users.module.css";
import {UsersObjType} from "../../../../redux/userReducer";
import axios from 'axios'
import userPhoto from '../../../../assets/images/user.png'

type PropsType = {
	users: Array<UsersObjType>
	setUsers: (users: Array<UsersObjType>) => void
	follow: (userId: number) => void
	unFollow: (userId: number) => void
}

const Users = (props: PropsType) => {

	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					props.setUsers(response.data.items)
				})
		}
	}



	return (
		<div>
			<button onClick={getUsers}>Get Users</button>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={classes.userPhoto}/>
						</div>
						<div>
							{
								u.followed ?
									<button onClick={() => {
										props.follow(u.id)
									}}>Follow</button> :
									<button onClick={() => {
										props.unFollow(u.id)
									}}>Unfollow</button>
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

export default Users