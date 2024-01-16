import React,{useEffect,useRef } from 'react';
import { LoginWrapper,LoginBox,Input,Button} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import { Redirect } from 'react-router-dom'

const Login = (props)=>{
    const { handleLogin,login } = props;

    const user = useRef();
    const pwd = useRef();

    if(!login ) {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' ref={user}/>
                    <Input placeholder='密码' type="password" ref={pwd}/>
                    <Button onClick={() => handleLogin(user.current.value, pwd.current.value)}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }else{
        return <Redirect to="/"/>
    }
}

const mapState = (state)=>({
    login:state.getIn(['login','login'])
})

const mapDispath = (dispatch)=>{
    return {
        handleLogin:(username,password)=>{
            dispatch(actionCreators.login(username,password))
        }
    }
}

export default connect(mapState,mapDispath)(Login)
