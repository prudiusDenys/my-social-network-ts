import React from "react";
import classes from "./Posts.module.css";
import {PostDataType} from "../../../../../redux/store";
import Post from "./Post/Post";
import StoreContext from "../../../../../StoreContext";




const Posts = () => {


	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState();
				let postElement = state.profile.postData.map(p => <Post name={p.name} time={p.time} text={p.text}/>)
				return (
					<div className={classes.postsWrapper}>
						{postElement}
					</div>)
			}
			}
		</StoreContext.Consumer>
	)
}

export default Posts;