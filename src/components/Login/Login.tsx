import React from "react";
import {InjectedFormProps} from "redux-form";
import {Field, reduxForm} from 'redux-form'


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
				<Field type="text" placeholder={'Login'} name={'login'} component={'input'}/>
			</div>
			<div>
				<Field type="text" placeholder={'Password'} name={'password'} component={'input'}/>
			</div>
			<div>
				<Field type="checkbox" name={'rememberMe'} component={'input'}/> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)