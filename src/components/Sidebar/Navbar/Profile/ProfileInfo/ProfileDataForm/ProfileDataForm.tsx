import React from "react";
import classes from "../ProfileInfo.module.css";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../../../../common/FormsControlls/FormsControlls";
import {DataProfileUserIdType} from "../../ProfileContainer";
import styles from '../../../../../../common/FormsControlls/FormsControlls.module.css';

export type ProfileFormDataType = {
	profile: DataProfileUserIdType
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	aboutMe: string
}


const ProfileDataForm: React.FC<InjectedFormProps<any>> = ({handleSubmit, error, initialValues}) => {

	return (
		<Form onSubmit={handleSubmit}>
			<div>
				<button>Save</button>
			</div>
			{error && <div className={styles.formSummaryError}>
				{error}
      </div>
			}

			<div>
				<b>Full name</b>: <Field type="text" placeholder={'Full name'} name={'fullName'} component={Input}/>
			</div>

			<div>
				<b>Looking for a job</b>: <Field type="checkbox" name={'lookingForAJob'} component={Input}/>
			</div>
			<div>
				<b>My professional skills</b>: <Field type="text" placeholder={'My professional skills'}
																							name={'lookingForAJobDescription'} component={Textarea}/>
			</div>
			<div>
				<b>About me</b>: <Field type="text" placeholder={'About me'} name={'aboutMe'} component={Textarea}/>
			</div>
			<div>
				<b>Contacts</b>: {Object.keys(initialValues.contacts).map((key: string) => {
				return (
					<div key={key} className={classes.contact}>
						<b>{key}: <Field type="text" placeholder={key} name={'contacts.' + key} component={Input}/></b>
					</div>
				)
			})}
			</div>
		</Form>
	)
}


const ProfileDataFormReduxForm = reduxForm<any>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm