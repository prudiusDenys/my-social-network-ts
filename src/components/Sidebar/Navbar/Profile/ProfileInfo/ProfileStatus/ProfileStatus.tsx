import React from "react";

type PropsType = {
	status: string
}
type StateType = {
	editMode: boolean
}

export class ProfileStatus extends React.Component<PropsType, StateType> {
	state = {
		editMode: false
	}

	activateEditMode() {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode() {
		this.setState({
			editMode: false
		})
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
        </div>
				}
				{this.state.editMode &&
        <div>
          <input onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} autoFocus/>
        </div>
				}
			</div>
		)
	}
}