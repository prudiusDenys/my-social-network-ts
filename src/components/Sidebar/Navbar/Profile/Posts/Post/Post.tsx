import React from "react";
import classes from "./Post.module.css";
import Avatar from "../../../../../../common/Avatar/Avatar";

type PropsType = {
	name: string
	time: string
	text: string
}

const Post = (props: PropsType) => {
	return (
		<div className={classes.post}>
			<div className={classes.userInfo}>
				<Avatar/>
				<div className={classes.nameAndDate}>
					<div className={classes.name}>
						{props.name}
					</div>
					<div className={classes.date}>
						{props.time}
					</div>
				</div>
			</div>
			<div className={classes.text}>
				{props.text}
			</div>
		</div>
	)
}

export default Post;