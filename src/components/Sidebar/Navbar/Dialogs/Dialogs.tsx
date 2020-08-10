import React from "react";
import classes from "./Dialogs.module.css";
import Contacts from "./Contacts/Contacts";
import AllMessagesContainer from "./AllMessages/AllMessagesContainer";


const Dialogs = () => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.title}>
				Your Massages
			</div>
			<div className={classes.dialogsBox}>
				<Contacts/>
				<AllMessagesContainer/>
			</div>
		</div>
	)
}

export default Dialogs;