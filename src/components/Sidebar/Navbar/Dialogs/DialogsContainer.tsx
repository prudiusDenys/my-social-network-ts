import React from "react";
import classes from "./Dialogs.module.css";
import AllMessagesContainer from "./AllMessages/AllMessagesContainer";
import ContactsContainer from "./Contacts/ContactsContainer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


const Dialogs1 = () => {
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

const mapStateToProps = (state: any) => {
	return {
		isAuth: state.auth.isAuth
	}
}
const mapDispatchToProps = (dispatch: any) => {
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;