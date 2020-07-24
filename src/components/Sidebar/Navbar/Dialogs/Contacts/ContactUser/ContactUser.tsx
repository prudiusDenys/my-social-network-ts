import React from "react";
import classes from './ContactUser.module.css'
import {NavLink} from "react-router-dom";


type PropsType = {
	id: number
	name: string
	avatarUrl: string
}

const ContactUser = (props: PropsType) => {
	return (
		<div key={props.id} className={classes.contactUserList}>
			<div className={classes.avatar}>
				<img src={props.avatarUrl} alt=""/>
			</div>
			<div className={classes.contactUser}>
				<NavLink className={classes.contactUserLink} to={`/dialogs/${props.id}`}
								 activeClassName={classes.active}>{props.name}
				</NavLink>
			</div>
		</div>
	)
};

export default ContactUser;