import React from "react";
import classes from "./Dialogs.module.css";
import AllMessagesContainer from "./AllMessages/AllMessagesContainer";
import ContactsContainer from "./Contacts/ContactsContainer";


const Dialogs = () => {
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