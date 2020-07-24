import React from "react";
import classes from "./Avatar.module.css";
import avatar from './avatar.jpg'


const Avatar = ()=>{
	return(
		<div className={classes.avatar}>
			<img src={avatar} alt=""/>
		</div>
	)
}

export default Avatar;