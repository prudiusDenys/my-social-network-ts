import React from "react";
import classes from "./Dialogs.module.css";
import AllMessagesContainer from "./AllMessages/AllMessagesContainer";
import ContactsContainer from "./Contacts/ContactsContainer";
import { Redirect } from "react-router-dom";

type PropsType = {
	isAuth: boolean
}

const Dialogs = (props: PropsType) => {
	if(!props.isAuth){
		return <Redirect to={'/login'}/>
	}
	return (
		<div className={classes.dialogs}>
			<div className={classes.title}>
				Your Massages
			</div>
			<div className={classes.dialogsBox}>
				<ContactsContainer/>
				<AllMessagesContainer/>
			</div>
		</div>
	)
}

export default Dialogs;