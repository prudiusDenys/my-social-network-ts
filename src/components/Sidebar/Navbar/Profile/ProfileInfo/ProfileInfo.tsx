import React, {useState} from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../../../assets/images/user.png";
import ProfileDataForm, {ProfileFormDataType} from "./ProfileDataForm/ProfileDataForm";

type PropsType = {
	profile: any
	status: any
	updateStatus: any
	isOwner: boolean
	savePhoto: (photo: any) => void
	saveProfile: any
}

export const ProfileInfo = (props: PropsType) => {

	let [editMode, setEditMode] = useState(false)

	if (!props.profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			props.savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData: ProfileFormDataType) => {
		props.saveProfile(formData)
			.then(()=>{
				setEditMode(false)
			})
	}

	return (
		<div>
			<div>
				<img
					src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fp7.hiclipart.com%2Fpreview%2F703%2F593%2F258%2Fpac-man-collection-3d-computer-graphics-clip-art-packman.jpg&imgrefurl=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-xdjca&tbnid=aZtdgwW0aIpYJM&vet=12ahUKEwjysqP3wrbrAhXItqQKHU70ATwQMygJegUIARCuAQ..i&docid=CpQPntaovCNugM&w=800&h=1186&q=packman&ved=2ahUKEwjysqP3wrbrAhXItqQKHU70ATwQMygJegUIARCuAQ"
					alt=""/>
			</div>
			<div>
				<img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} alt=""/>
				{
					editMode ?
						<ProfileDataForm onSubmit={onSubmit}
														 initialValues={props.profile}/>
						:
						<ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)}/>
				}
				{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
			</div>
		</div>
	)
}

type ContactsValue = {
	contactTitle: string
	contactValue: string
}


type ProfileDataType = {
	profile: any,
	isOwner: boolean,
	goToEditMode: () => void
}


const ProfileData = (props: ProfileDataType) => {
	return (
		<div>
			{
				props.isOwner &&
        <div>
          <button onClick={props.goToEditMode}>edit</button>
        </div>
			}
			<div>
				<b>Full name</b>: {props.profile.fullName}
			</div>
			<div>
				<b>Looking for a job</b>: {props.profile.lookingForAJob ? 'Yes' : 'no'}
			</div>
			{
				props.profile.lookingForAJob &&
        <div>
          <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        </div>
			}
			<div>
				<b>About me</b>: {props.profile.aboutMe}
			</div>
			<div>
				<b>Contacts</b>: {Object.keys(props.profile.contacts).map((key: string) => {
				return <Contact key={key}
												contactTitle={key} contactValue={props.profile.contacts[key]}/>
			})}
			</div>
		</div>
	)

}


const Contact = ({contactTitle, contactValue}: ContactsValue) => {
	return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}