import React from "react";
import classes from "./HeaderProfileLink.module.css";
import avatar from "../../../common/Avatar/avatar.jpg";

const HeaderProfileLink = ()=>{
	return(
		<div className={classes.headerProfileLink}>
			<a href="#"><img src={avatar} alt=""/></a>
		</div>
	)
}

export default HeaderProfileLink;