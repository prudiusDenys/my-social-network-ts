import React from "react";
import classes from "./Contacts.module.css";
import {UserDataType} from "../../../../../redux/store";
import ContactUser from "./ContactUser/ContactUser";

type PropsType = {
	userData: Array<UserDataType>
}

const Contacts = (props: PropsType) => {

	let contactElement = props.userData.map(c=><ContactUser id={c.id} name={c.name} avatarUrl={c.avatarUrl}/>)

	return (
			<div className={classes.contactsList}>
				<div className={classes.contactsListTitle}>
					Your contacts
				</div>
				{contactElement}
			</div>
	)
}

export default Contacts;