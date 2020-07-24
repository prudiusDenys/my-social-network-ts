import React from "react";
import classes from "./NewPost.module.css";
import Avatar from "../../../../../common/Avatar/Avatar";


const NewPost = () => {
	return (
		<div className={classes.newPost}>
				<Avatar/>
			<div className={classes.input}>
				<input type="text" placeholder={'Say something'}/>
				<button>SHARE</button>
			</div>
		</div>
	)
}
export default NewPost;