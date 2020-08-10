import React from "react";
import {StoreType} from "./redux/store";

export type providerType ={
	store: StoreType
	children: any
}

const StoreContext = React.createContext({} as StoreType);

export default StoreContext;