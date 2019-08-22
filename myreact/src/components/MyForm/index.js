import React, { Component } from 'react';
import styles from './index.module.scss';
import { Link, withRouter } from 'react-router-dom';
import ctx from '@/assets/js/ctx';
import { Toast } from 'antd-mobile'

class MyForm extends Component {
    static contextType = ctx

    constructor() {
        super()
        this.state = {
            userName: "", // 输入框内容
            userPwd: ""
        }
    }
    // 返回上一页
    toBack = () => {
        this.props.history.goBack();
    }

    // 获取输入框的值
    iptValue = key => (e) => {
        this.setState({
            [key]: e.target.value
        })
    }

    reqUser = () => {
        const { userName, userPwd } = this.state;
        // 接收父组件传过来的请求路径和函数success
        const { path, success } = this.props;

        const result = /^1(3|4|5|6|7|8|9)\d{9}$/.test(userName) || /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(userName);
        if(userName == "" || userPwd == ""){
            Toast.fail('请输入内容',2);
            return false;
        }
        if(!result){
            Toast.fail('用户名为邮箱或手机号',2);
            return false;
        }

        this.context.axios.post(path, {
            userName,
            userPwd
        }).then((res) => {
            success(res)
        })
    }

    render() {
        // 父组件传来的参数
        const { title, btnText} = this.props;
        return (
            <div className={styles.login}>
                <img className={styles.loginimg} src={require('@/assets/images/login_top.png')} alt=""/>
                <div className={styles.content}>
                    <em className="iconfont icon-houtui" onClick={this.toBack}></em>
                    <div className={styles.logo}>
                        <p className="iconfont icon-logo"></p>
                        <h2 className={styles.logintxt}>{title}</h2>
                    </div>
                    <div className={styles.login_wrap}>
                        <ul>
                            <li className={styles.username}>
                                <span className="iconfont icon-icon"></span>
                                <input type="text" placeholder="请输入邮箱 / 手机号" value={this.state.userName} onChange={this.iptValue('userName')}/>
                            </li>
                            <li className={styles.userpwd}>
                                <span className="iconfont icon-mima"></span>
                                <input type="password" placeholder="请输入密码" value={this.state.userPwd} onChange={this.iptValue('userPwd')}/>
                            </li>
                        </ul>
                    </div>
                    {
                        title == "小阅登录" && <p className={styles.reg}>
                            <Link to="">忘记密码</Link>
                            <Link to="/user/register" replace>立即注册</Link>
                        </p>
                    }
                    <div className={styles.btn} onClick={this.reqUser}>{btnText}</div>
                    {
                        title == "小阅登录" && <p className={styles.other_login}>
                            <span className="iconfont icon-QQ"></span>
                            <span className="iconfont icon-shouji"></span>
                            <span className="iconfont icon-weibo"></span>
                            <span className="iconfont icon-baidu"></span>
                        </p>
                    }
                </div>
            </div>
        )
    }
}

export default withRouter (MyForm)
