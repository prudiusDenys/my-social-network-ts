import React from "react";
import classes from "./Contacts.module.css";
import ContactUser from "./ContactUser/ContactUser";
import {UserDataType} from "../../../../../redux/store";

type PropsType = {
	contactsData: Array<UserDataType>
}

const Contacts = (props: PropsType) => {
				let contactElement = props.contactsData.map(c=><ContactUser key={c.id} id={c.id} name={c.name} avatarUrl={c.avatarUrl}/>)
				return(
					<div className={classes.contactsList}>
						<div className={classes.contactsListTitle}>
							Your contacts
						</div>
						{contactElement}
					</div>)
}

export default Contacts;