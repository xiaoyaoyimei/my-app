import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import {
	LoginWrapper,
	Input,
	Button
} from './style';
import { connect } from 'react-redux';
import{actionCreators} from './store'
class Login extends PureComponent{

	render(){
			const {loginStatus}=this.props;
			console.log(loginStatus)
	if(!loginStatus){
		return(
			<LoginWrapper>
			<Input placeholder='用户名' ref={(input)=>{this.account = input}}/>
		<Input placeholder='密码' ref={(input)=>{this.password = input}}/>
		<Button onClick={() => this.props.login(this.account, this.password)}>登录</Button></LoginWrapper>)
	}else{
			return <Redirect to='/'/>
	}
}
	}
const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})
const mapDispatch=(dispatch)=>({
	login(a,p){
			dispatch(actionCreators.login(a.value, p.value))
	}
})
export default connect(mapState,mapDispatch)(Login);