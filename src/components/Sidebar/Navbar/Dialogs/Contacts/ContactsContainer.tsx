import React from "react";
import Contacts from "./Contacts";
import {StateType} from "../../../../../redux/store";
import {connect} from "react-redux";

let mapStateProps = (state: StateType) => {
	return{
		contactsData: state.dialogs.contactsData
	}
}

const ContactsContainer = connect(mapStateProps)(Contacts)

export default ContactsContainer;