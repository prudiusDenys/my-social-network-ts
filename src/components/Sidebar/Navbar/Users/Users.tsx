import React from "react";
import classes from "./Users.module.css";
import {UsersObjType} from "../../../../redux/userReducer";


type PropsType = {
	users: Array<UsersObjType>
	setUsers: (users: Array<UsersObjType>)=>void
	follow: (userId: number)=>void
	unFollow: (userId: number)=>void
}

const Users = (props: PropsType) => {

if(props.users.length === 0){
	props.setUsers([
		{
			id: 1,
			photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTijr8vVd22zCbdh6_D3bfwZ1p2iAD-0veTEr5prj48dUh-Vvec4Pdi7tx3aEzsGaYiaTWhSrpHo6huN2-JUvCEDfgTitDbw2y1yA&usqp=CAU&ec=45690275',
			followed: false,
			fullName: 'Denis',
			status: 'I am a boss here',
			location: {
				city: 'Minsk',
				country: 'Belarus'
			},
		},
		{
			id: 2,
			photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTijr8vVd22zCbdh6_D3bfwZ1p2iAD-0veTEr5prj48dUh-Vvec4Pdi7tx3aEzsGaYiaTWhSrpHo6huN2-JUvCEDfgTitDbw2y1yA&usqp=CAU&ec=45690275',
			followed: true,
			fullName: 'Andrey',
			status: 'Hi I am here',
			location: {
				city: 'Bolzano',
				country: 'Italy'
			},
		},
		{
			id: 3,
			photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTijr8vVd22zCbdh6_D3bfwZ1p2iAD-0veTEr5prj48dUh-Vvec4Pdi7tx3aEzsGaYiaTWhSrpHo6huN2-JUvCEDfgTitDbw2y1yA&usqp=CAU&ec=45690275',
			followed: false,
			fullName: 'Viktor',
			status: 'Hi everyone',
			location: {
				city: 'Moscow',
				country: 'Russia'
			},
		}
	])
}

	return (
		<div>
			{
				props.users.map(u=><div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} alt="" className={classes.userPhoto}/>
						</div>
						<div>
							{
								u.followed ?
									<button onClick={()=>{props.follow(u.id)}}>Follow</button> :
									<button onClick={()=>{props.unFollow(u.id)}}>Unfollow</button>
							}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	)
}

export default Users