import React from "react";
import Contacts from "./Contacts";
import {StateType} from "../../../../../redux/store";
import {connect} from "react-redux";


// const ContactsContainer = () => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store)=>{
// 				let state = store.getState();
// 				let contactElement = state.dialogs.contactsData.map(c=><ContactUser id={c.id} name={c.name} avatarUrl={c.avatarUrl}/>)
// 				return(
// 					<div className={classes.contactsList}>
// 						<div className={classes.contactsListTitle}>
// 							Your contacts
// 						</div>
// 						{contactElement}
// 					</div>)}
// 			}
// 		</StoreContext.Consumer>
// 	)
// }

let mapStateProps = (state: StateType) => {
	return{
		contactsData: state.dialogs.contactsData
	}
}

const ContactsContainer = connect(mapStateProps)(Contacts)

export default ContactsContainer;