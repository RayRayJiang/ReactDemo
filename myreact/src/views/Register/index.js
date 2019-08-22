import React, { Component } from 'react';
import MyForm from '@/components/MyForm';
import { Toast } from 'antd-mobile';

export class Register extends Component {

    reqRegister = (res) => {
        const { code, msg } = res;
        if(code == 1){
            Toast.success('注册成功', 1, () => {
                // 注册成功后,跳往登录页面时删除上一页
                this.props.history.replace('/user/login')
            })
        }else{
            Toast.fail(msg,2)
        }
    }

    render() {
        return (
            <div>
                <MyForm title="欢迎注册" btnText="注册" path="/users/register" success={this.reqRegister} />
            </div>
        )
    }
}

export default Register
