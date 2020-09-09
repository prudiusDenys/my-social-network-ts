import React, {ChangeEvent} from "react";

type PropsType = {
	status: any
	updateStatus: any
}
type StateType = {
	editMode: boolean
}

export class ProfileStatus extends React.Component<PropsType, any> {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = ()=> {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = (e:ChangeEvent<HTMLInputElement>)=>{
			this.setState({
				status: e.currentTarget.value
			})
}
	render() {
		return (
			<div>
				{!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
        </div>
				}
				{this.state.editMode &&
        <div>
          <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} autoFocus/>
        </div>
				}
			</div>
		)
	}
}