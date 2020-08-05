import React from "react";
import classes from "./Posts.module.css";
import {PostDataType} from "../../../../../redux/store";
import Post from "./Post/Post";



type propsType = {
	postData: Array<PostDataType>
}

const Posts = (props: propsType) => {

	let postElement = props.postData.map(p => <Post name={p.name} time={p.time} text={p.text}/>)

	return (
		<div className={classes.postsWrapper}>
			{postElement}
		</div>
	)
}

export default Posts;