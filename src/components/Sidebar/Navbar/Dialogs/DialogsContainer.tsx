import React from "react";
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

export default compose(WithAuthRedirect)(Dialogs)