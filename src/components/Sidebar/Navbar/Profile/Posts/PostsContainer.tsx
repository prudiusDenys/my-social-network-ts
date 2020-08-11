import React from "react";
import {StateType} from "../../../../../redux/store";
import {connect} from "react-redux";
import Posts from "./Posts";


// const PostsContainer = () => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				let state = store.getState();
// 				let postElement = state.profile.postData.map(p => <Post name={p.name} time={p.time} text={p.text}/>)
// 				return (
// 					<div className={classes.postsWrapper}>
// 						{postElement}
// 					</div>)
// 			}
// 			}
// 		</StoreContext.Consumer>
// 	)
// }

let mapStateProps = (state: StateType) => {
	return {
		postData: state.profile.postData
	}
}

const PostsContainer = connect(mapStateProps)(Posts)

export default PostsContainer;