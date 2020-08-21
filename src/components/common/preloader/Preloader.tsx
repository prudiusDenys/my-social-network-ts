import preloader from "../../../assets/images/preloader.gif";
import React from "react";


const Preloader = () => {
	return (
		<div>
			<img src={preloader} alt={''} style={{width: '60px', height: '60px'}}/>
		</div>
	)
}

export default Preloader;
