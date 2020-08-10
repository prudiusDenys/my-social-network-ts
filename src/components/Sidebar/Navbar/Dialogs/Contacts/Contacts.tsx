import React from "react";
import classes from "./Contacts.module.css";
import ContactUser from "./ContactUser/ContactUser";
import StoreContext from "../../../../../StoreContext";


const Contacts = () => {
	return (
		<StoreContext.Consumer>
			{(store)=>{
				let state = store.getState();
				let contactElement = state.dialogs.contactsData.map(c=><ContactUser id={c.id} name={c.name} avatarUrl={c.avatarUrl}/>)
				return(
					<div className={classes.contactsList}>
						<div className={classes.contactsListTitle}>
							Your contacts
						</div>
						{contactElement}
					</div>)}
			}
		</StoreContext.Consumer>
	)
}

export default Contacts;