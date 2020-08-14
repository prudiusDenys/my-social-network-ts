import React from "react";
import classes from "./Users.module.css";

const Users = (props: any) => {

if(props.users.length === 0){
	props.setUsers([
		{
			id: 1,
			photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F88%2FDmitry_Nagiev_2017_4.jpg&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%259D%25D0%25B0%25D0%25B3%25D0%25B8%25D0%25B5%25D0%25B2%2C_%25D0%2594%25D0%25BC%25D0%25B8%25D1%2582%25D1%2580%25D0%25B8%25D0%25B9_%25D0%2592%25D0%25BB%25D0%25B0%25D0%25B4%25D0%25B8%25D0%25BC%25D0%25B8%25D1%2580%25D0%25BE%25D0%25B2%25D0%25B8%25D1%2587&tbnid=5tE0bhrheOexuM&vet=12ahUKEwjjzOWxjJvrAhWSNewKHTPXCmsQMygAegUIARDOAQ..i&docid=I9LBIKY5Zm8jpM&w=758&h=928&itg=1&q=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&ved=2ahUKEwjjzOWxjJvrAhWSNewKHTPXCmsQMygAegUIARDOAQ',
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
			photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F88%2FDmitry_Nagiev_2017_4.jpg&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%259D%25D0%25B0%25D0%25B3%25D0%25B8%25D0%25B5%25D0%25B2%2C_%25D0%2594%25D0%25BC%25D0%25B8%25D1%2582%25D1%2580%25D0%25B8%25D0%25B9_%25D0%2592%25D0%25BB%25D0%25B0%25D0%25B4%25D0%25B8%25D0%25BC%25D0%25B8%25D1%2580%25D0%25BE%25D0%25B2%25D0%25B8%25D1%2587&tbnid=5tE0bhrheOexuM&vet=12ahUKEwjjzOWxjJvrAhWSNewKHTPXCmsQMygAegUIARDOAQ..i&docid=I9LBIKY5Zm8jpM&w=758&h=928&itg=1&q=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&ved=2ahUKEwjjzOWxjJvrAhWSNewKHTPXCmsQMygAegUIARDOAQ',
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
			photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F88%2FDmitry_Nagiev_2017_4.jpg&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%259D%25D0%25B0%25D0%25B3%25D0%25B8%25D0%25B5%25D0%25B2%2C_%25D0%2594%25D0%25BC%25D0%25B8%25D1%2582%25D1%2580%25D0%25B8%25D0%25B9_%25D0%2592%25D0%25BB%25D0%25B0%25D0%25B4%25D0%25B8%25D0%25BC%25D0%25B8%25D1%2580%25D0%25BE%25D0%25B2%25D0%25B8%25D1%2587&tbnid=5tE0bhrheOexuM&vet=12ahUKEwjjzOWxjJvrAhWSNewKHTPXCmsQMygAegUIARDOAQ..i&docid=I9LBIKY5Zm8jpM&w=758&h=928&itg=1&q=%D0%BD%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2&ved=2ahUKEwjjzOWxjJvrAhWSNewKHTPXCmsQMygAegUIARDOAQ',
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