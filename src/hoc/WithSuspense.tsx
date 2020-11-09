import React, {Suspense} from "react";

export const WithSuspense = (Component: any) => {
	return (props: any)=>{
		return(
				<Suspense fallback={<div>Loading...</div>}>
					<Component {...props}/>
				</Suspense>
			)
	}
}