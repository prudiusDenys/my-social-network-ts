import React from "react";
import {InjectedFormProps} from "redux-form";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../../common/FormsControlls/FormsControlls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from './../../common/FormsControlls/FormsControlls.module.css';


type FormDataType = {
	email: string
	password: string
	rememberMe: boolean,
	captcha: any,
}

type LoginFormOwnProps = {
	captchaUrl: string | null
}

const Login = (props: any) => {

	const onSubmit = (formData: FormDataType) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'}/>
	}

	return (
		<div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
		</div>
	)
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
	return (
		<form onSubmit={handleSubmit}>

			{captchaUrl && <img src={captchaUrl} alt=""/>}
			{captchaUrl && <Field type="text" validate={[requiredField]} placeholder={'Symbols from image'} name={'captcha'}
                            component={Input}/>}

			<div>
				<Field type="text" validate={[requiredField]} placeholder={'Email'} name={'email'} component={Input}/>
			</div>
			<div>
				<Field type="password" validate={[requiredField]} placeholder={'Password'} name={'password'} component={Input}/>
			</div>
			<div>
				<Field type="checkbox" validate={[]} name={'rememberMe'} component={Input}/> remember me
			</div>
			{error && <div className={classes.formSummaryError}>
				{error}
      </div>
			}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)
const mapStateToProps = (state: any) => {
	return {
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl
	}
}
export default connect(mapStateToProps, {login})(Login)