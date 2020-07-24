import React from "react";
import classes from './HeaderSearch.module.css'
const HeaderSearch = ()=>{
	return(
		<div className={classes.headerSearch}>
			<input type="text" placeholder={'search'}/>
		</div>
	)
}

export default HeaderSearch;