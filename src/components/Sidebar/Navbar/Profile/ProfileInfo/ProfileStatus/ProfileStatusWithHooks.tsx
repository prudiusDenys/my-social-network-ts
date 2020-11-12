import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
	status: any
	updateStatus: any
}

export const ProfileStatusWithHooks = (props: PropsType) => {

	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value)
	}


	return (
		<div>
			{!editMode &&
      <div>
        <b>Status</b>: <span onDoubleClick={activateMode}>{props.status || '----'}</span>
      </div>
			}
			{editMode &&
      <div>
        <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
      </div>
			}
		</div>
	)
}