import React, { Component } from 'react';
import styles from './index.module.scss'
import { Modal } from "antd-mobile";
import { withRouter } from "react-router-dom";
import ctx from '@/assets/js/ctx';
import { connect } from 'react-redux'

export class HeaderUI extends Component {

    static contextType = ctx;
    constructor() {
        super()
        this.state = {
            isShow: false
        }
    }

    // 顶部弹框
    showModal = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    // 返回上一页
    toBack = () => {
        this.props.history.goBack();
    }
    // 返回首页
    toHome = () => {
        this.props.history.push('/home');
    }
    // 分类跳转
    toClassify = () => {
        this.props.history.push('/classify');
    }
    // 排行榜跳转
    toRanking = () => {
        this.props.history.push('/ranking');
    }
    // 完本页跳转
    toFinishBook = () => {
        this.props.history.push('/finishbook');
    }
    // 个人中心跳转
    toMyCenter = () => {
        const {token} = this.props
        if(!token){
            this.props.history.push('/user/login');
        }else{
            this.props.history.push('/mycenter');
        }
    }
    
    
    render() {
        const {isShow} = this.state;
        const {title} = this.props
        return (
            <div className={styles.header}>
                <div className={styles.toback}>
                    <span className="iconfont icon-houtui" onClick={this.toBack}></span>
                    <span className={styles.bookname}>{title}</span>
                </div>
                <span className={isShow ? "iconfont icon-cha" : "iconfont icon-menu"} onClick={this.showModal}></span>

                <Modal
                popup
                visible={this.state.isShow}
                onClose={this.showModal}
                animationType="slide-down"
                transparent
                >
                    <ul className="modal_ul">
                        <li className="modal_li" onClick={this.toHome}>
                            <span className="iconfont icon-icon_home"></span>
                            <p className="ico_name">首页</p>
                        </li>
                        <li className="modal_li" onClick={this.toClassify}>
                            <span className="iconfont icon-leimupinleifenleileibie"></span>
                            <p className="ico_name">分类</p>
                        </li>
                        <li className="modal_li" onClick={this.toRanking}>
                            <span className="iconfont icon-paihangbangxuanzhong"></span>
                            <p className="ico_name">排行榜</p>
                        </li>
                        <li className="modal_li" onClick={this.toFinishBook}>
                            <span className="iconfont icon-fuli"></span>
                            <p className="ico_name">福利</p>
                        </li>
                        <li className="modal_li" onClick={this.toFinishBook}>
                            <span className="iconfont icon-shu"></span>
                            <p className="ico_name">完本</p>
                        </li>
                        <li className="modal_li" onClick={this.toMyCenter}>
                            <span className="iconfont icon-icon"></span>
                            <p className="ico_name">账户</p>
                        </li>
                    </ul>
                    <div className="mybook">
                        <div className="btn">我的书架</div>
                    </div>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        token: state.getToken.token
    }
}

const Header = connect(mapStateToProps)(HeaderUI)


export default withRouter(Header)
