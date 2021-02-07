import React, { Component } from 'react';
import styles from './index.module.scss';
import './index.scss'
import { Carousel } from "antd-mobile";
import { NavLink } from "react-router-dom";
import ctx from '@/assets/js/ctx';
import { connect } from "react-redux";
// 引入子组件
import SlideModule from '@/components/SlideModule';
import BookModule from '@/components/BookModule';
import BackTop from '@/components/BackTop';



class HomeUI extends Component {
    static contextType = ctx;
    constructor() {
        super()
        this.state = {
            swiperList: [
                require('@/assets/images/swiper1.jpg'),
                require('@/assets/images/swiper2.jpg'),
                require('@/assets/images/swiper3.jpg'),
                require('@/assets/images/swiper4.jpg'),
            ],
            rankingType: ["热销榜", "点击榜", "新书榜", "完本榜"],
            recommendType1: ["现代言情", "古代言情", "豪门总裁", "玄幻言情"],
            recommendType2: ["穿越架空", "仙侠奇缘", "青春灵异", "科幻网游"]
        }
    }

    toLogin = () => {
        const { token } = this.props;
        if (!token) {
            this.props.history.push('/user/login')
        } else {
            this.props.history.push('/mycenter')
        }
    }

    toBookShelf = () => {
        const { token } = this.props;
        if (!token) {
            this.props.history.push('/user/login')
        } else {
            this.props.history.push('/bookshelf')
        }
    }

    render() {
        return (
            <div className={styles.home}>
                {/* 头部导航 */}
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <span className="iconfont icon-logo"></span>
                        <h1 className={styles.logotext}>阅读一时爽</h1>
                    </div>
                    <div className={styles.rightico}>
                        <span className="iconfont icon-icon" onClick={this.toLogin}></span>
                        <span className="iconfont icon-shu2"></span>
                    </div>
                </header>

                {/* 轮播图 */}
                <Carousel
                    // 项目之间的间距，以px为单位
                    cellSpacing={5}
                    // 是否自动切换
                    autoplay
                    // 是否循环播放
                    infinite
                    // 自动切换的时间间隔
                    autoplayInterval={2000}
                >
                    {
                        this.state.swiperList.map((e, i) => {
                            return <img className="swpimg" src={e} key={i} alt="难啊" />
                        })
                    }
                </Carousel>

                {/* 搜索框 */}
                <div className={styles.search}>
                    <div className={styles.iconbox}>
                        <span className="iconfont icon-fangdajing"></span>
                        <p className={styles.msg}>建设大时代</p>
                    </div>
                </div>

                <div className={styles.navlist}>
                    <NavLink className={styles.nav} to="/classify">
                        <span className="iconfont icon-leimupinleifenleileibie"></span>
                        <p className={styles.navname}>分类</p>
                    </NavLink>
                    <NavLink className={styles.nav} to="/ranking">
                        <span className="iconfont icon-paihangbangxuanzhong"></span>
                        <p className={styles.navname}>排行榜</p>
                    </NavLink>
                    <NavLink className={styles.nav} to="/finishbook">
                        <span className="iconfont icon-fuli"></span>
                        <p className={styles.navname}>福利</p>
                    </NavLink>
                    <NavLink className={styles.nav} to="/newbook">
                        <span className="iconfont icon-shu1"></span>
                        <p className={styles.navname}>新书</p>
                    </NavLink>
                    <NavLink className={styles.nav} to="/finishbook">
                        <span className="iconfont icon-shu"></span>
                        <p className={styles.navname}>完本</p>
                    </NavLink>
                </div>

                {/* 本期强推 */}
                <SlideModule slideTitle="本期强推" slide="强推" />

                {/* 新书抢鲜 */}
                <BookModule bookTitle='新书抢鲜' slide="新书" />

                {/* 限时免费 */}
                <SlideModule slideTitle="限时免费" slide="限时" />

                {/* 编辑推荐 */}
                <SlideModule slideTitle="编辑推荐" slide="强推" />

                {/* 排行榜 */}
                <SlideModule slideTitle="排行榜" typeList={this.state.rankingType} />

                {/* 分类推荐 */}
                <SlideModule slideTitle="分类推荐" typeList={this.state.recommendType1} />
                <SlideModule typeList={this.state.recommendType2} />

                {/* 人气完本 */}
                <BookModule bookTitle='人气完本' slide="完本" />
                <BackTop />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.getToken.token
    }
}

const Home = connect(mapStateToProps)(HomeUI);

export default Home
