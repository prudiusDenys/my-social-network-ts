import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import {PostDataType} from "../../../../../redux/store";


type PropsType = {
	postData: Array<PostDataType>
}

const Posts = React.memo((props: PropsType) => {

	let postElement = props.postData.map(p => <Post key={p.id} name={p.name} time={p.time} text={p.text}/>)

	return (
		<div className={classes.postsWrapper}>
			{postElement}
		</div>)
})

export default Posts;