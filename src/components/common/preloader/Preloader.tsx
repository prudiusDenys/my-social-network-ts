import React from "react";
import {CircularProgress} from "@material-ui/core";
import classes from "./Preloader.module.css";


const Preloader = () => {
	return (
		<div className={classes.preloader}>
			<CircularProgress />
		</div>
	)
}

export default Preloader;
