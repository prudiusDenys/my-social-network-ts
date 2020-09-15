import React from "react";
import {InjectedFormProps} from "redux-form";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../../common/FormsControlls/FormsControlls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import { Redirect } from "react-router-dom";


type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
}


const Login = (props:any) => {

	const onSubmit = (formData: FormDataType) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if(props.isAuth){
		return <Redirect to={'/profile'}/>
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
				<Field type="text" validate={[requiredField]} placeholder={'Email'} name={'email'} component={Input}/>
			</div>
			<div>
				<Field type="password" validate={[requiredField]} placeholder={'Password'} name={'password'} component={Input}/>
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
const mapStateToProps = (state:any) => {
	return{
		isAuth: state.auth.isAuth
	}
}
export default connect(mapStateToProps,{login})(Login)