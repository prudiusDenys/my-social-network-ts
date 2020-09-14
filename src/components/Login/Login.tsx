import React from "react";
import {InjectedFormProps} from "redux-form";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../../common/FormsControlls/FormsControlls";
import {requiredField} from "../../utils/validators/validators";


type FormDataType = {
	Login: string
	Password: string
	rememberMe: boolean
}


export const Login = () => {

	const onSubmit = (formData: FormDataType) => {
		console.log(formData)
	}

	return (
		<div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field type="text" validate={[requiredField]} placeholder={'Login'} name={'login'} component={Input}/>
			</div>
			<div>
				<Field type="text" validate={[requiredField]} placeholder={'Password'} name={'password'} component={Input}/>
			</div>
			<div>
				<Field type="checkbox" validate={[]} name={'rememberMe'} component={Input}/> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)