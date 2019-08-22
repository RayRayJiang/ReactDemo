import React, { Component } from 'react';
import MyForm from '@/components/MyForm';
import { Toast } from 'antd-mobile';
import ctx from '@/assets/js/ctx';
import { connect } from "react-redux";
import { changeToken } from "@/store/actionCreators";

class LoginUI extends Component {
    static contextType = ctx;
    reqLogin = (res) => {
        const { code, msg, token } = res;
        if(code == 1){
            Toast.success(msg, 1, () => {
                // 登陆成功后，返回上一页
                this.props.history.goBack();
                // 将token存到本地
                localStorage.setItem('token', token);
                // 存到redux仓库
                this.props.changeToken(token)
            })
        }else{
            Toast.fail(msg,1)
        }
    }

    render() {
        return (
            <div>
                <MyForm title="小阅登录" btnText="登录" path="/users/login" success={this.reqLogin}/>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return {
//         token: state.getToken.token
//     }
// }

function mapDispatchToProps(dispatch){
    return {
        changeToken: (item) => {
            return dispatch(changeToken(item))
        }
    }
}

const LoginContainer = connect(null, mapDispatchToProps)(LoginUI)
export default LoginContainer
