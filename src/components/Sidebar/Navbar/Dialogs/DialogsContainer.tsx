import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";



const AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect()(AuthRedirectComponent)

export default DialogsContainer;