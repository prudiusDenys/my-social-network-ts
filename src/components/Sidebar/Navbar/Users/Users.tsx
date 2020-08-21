import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../../assets/images/user.png";
import {UsersObjType} from "../../../../redux/userReducer";

type PropsType = {
	users: Array<UsersObjType>
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber : number)=>void
	follow: (userId: number) => void
	unFollow: (userId: number) => void
}

let Users = (props: PropsType) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages: Array<number> = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return <div>
		<div>
			{pages.map(p => {
				return <span className={props.currentPage === p ? classes.selectedPage : ''} onClick={(e) => {
					props.onPageChanged(p)
				}}>{p}</span>
			})}
		</div>
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
}

export default Users