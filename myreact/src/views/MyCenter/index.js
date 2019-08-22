import React, { Component } from 'react';
import styles from './index.module.scss';
import ctx from '@/assets/js/ctx';
import { connect } from "react-redux"; 
import Header from '@/components/Header';
import {changeToken} from '@/store/actionCreators'

export class MyCenterUI extends Component {
    static contextType = ctx;
    constructor() {
        super()
        this.state = {
            userName: ""
        }
    }

    reqUserInfo = () => {
        this.context.axios.post('/users/info', {
            token: this.props.token
        }).then((res) => {
            const {code, msg, userName} = res;
            if(code == 1){
                this.setState({
                    userName: userName
                })
            }else{
                alert(msg)
            }
        })
    }
    // 退出登录
    quitLogin = () => {
        localStorage.setItem('token', "");
        this.props.changeToken("");
        this.props.history.push('/home');
    }

    componentDidMount() {
        this.reqUserInfo()
    }

    render() {
        const {userName} = this.state;
        return (
            <div className={styles.mycenter}>
                <Header title="个人中心" />
                <div className={styles.center_header}>
                    <div className={styles.center_img}>
                        <img className={styles.myimg} src={require('@/assets/images/center.jpg')} alt=""/>
                    </div>
                    <p className={styles.user_name}>{userName}</p>
                </div>
                <ul className={styles.btn_group}>
                    <li className={styles.btn_li}>
                        <span>0</span>
                        <p className={styles.num}>月票</p>
                    </li>
                    <li className={styles.btn_li}>
                        <span>0</span>
                        <p className={styles.num}>推荐票</p>
                    </li>
                    <li className={styles.btn_li}>
                        <span>0</span>
                        <p className={styles.num}>限免券</p>
                    </li>
                </ul>

                <ul className={styles.nav}>
                    <li className={styles.nav_li}>
                        <div>
                            <em className="iconfont icon-huiyuan"></em>
                            <span>会员中心</span>
                        </div>
                        <span className={styles.right}>></span>
                    </li>
                    <li className={styles.nav_li}>
                        <div>
                            <em className="iconfont icon-xiaoxi1"></em>
                            <span>消息中心</span>
                        </div>
                        <span className={styles.right}>></span>
                    </li>
                    <li className={styles.nav_li}>
                        <div>
                            <em className="iconfont icon-anquan"></em>
                            <span>安全中心</span>
                        </div>
                        <span className={styles.right}>></span>
                    </li>
                    <li className={styles.nav_li}>
                        <div>
                            <em className="iconfont icon-bangzhu"></em>
                            <span>帮助中心</span>
                        </div>
                        <span className={styles.right}>></span>
                    </li>
                    <li className={styles.nav_li}>
                        <div>
                            <em className="iconfont icon-xiaoxi"></em>
                            <span>会员中心</span>
                        </div>
                        <span className={styles.right}>></span>
                    </li>
                </ul>
                <div className={styles.quit_btn} onClick={this.quitLogin}>退出登录</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        token: state.getToken.token
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeToken: (item) => {
            return dispatch(changeToken(item))
        }
    }
}

const MyCenterContainer = connect(mapStateToProps, mapDispatchToProps)(MyCenterUI)

export default MyCenterContainer
