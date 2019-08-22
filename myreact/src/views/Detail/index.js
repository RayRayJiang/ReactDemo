import React, { Component } from 'react'
import styles from './index.module.scss';
import ctx from '@/assets/js/ctx';

import Header from '@/components/Header'

export class Detail extends Component {
    static contextType = ctx
    constructor() {
        super()
        this.state = {
            bookinfo: null,
        }
    }

    reqDetaile = () => {
        const id = this.props.match.params.id
        this.context.axios.post('/books/detail',{
            id
        }).then((res) => {
            const {code, msg, data} = res
            if(code == 1){
                this.setState({
                    bookinfo: data
                })
            }else{
                alert(msg)
            }
        })
    }

    componentDidMount() {
        this.reqDetaile()
    }
    
    render() {
        const {bookinfo} = this.state;
        return (
            <div>
                {
                    bookinfo && <div className={styles.detail}>
                        {/* 顶部导航 */}
                        <Header title={bookinfo.bookName} />

                        {/* 小说详情 */}
                        <div className={styles.content}>
                            <div className={styles.top}>
                                <img className={styles.bookimg} src={this.context.commonUrl + bookinfo.bookImg} alt=""/>
                                <div className={styles.book_cell}>
                                    <h2 className={styles.name}>{bookinfo.bookName}</h2>
                                    <p>{bookinfo.writer}</p>
                                    <p>{bookinfo.bookType}</p>
                                    <p>{bookinfo.bookNum}万字 | {bookinfo.newBook}</p>
                                </div>
                            </div>

                            <ul className={styles.btn_group}>
                                <li>免费试读</li>
                                <li>VIP订阅</li>
                                <li>加书架</li>
                                <li>加书单</li>
                            </ul>

                            <p className={styles.bookdesc}>{bookinfo.bookDesc}</p>
                        </div>

                        <ul className={styles.ticket_ul}>
                            <li className={styles.ticket_li}>
                                <span className="iconfont icon-yuepiao"></span>
                                <p className={styles.iconame}>月票</p>
                            </li>
                            <li className={styles.ticket_li}>
                                <span className="iconfont icon-tuijianpiao"></span>
                                <p className={styles.iconame}>推荐票</p>
                            </li>
                            <li className={styles.ticket_li}>
                                <span className="iconfont icon-fuli"></span>
                                <p className={styles.iconame}>礼物</p>
                            </li>
                            <li className={styles.ticket_li}>
                                <span className="iconfont icon-qun"></span>
                                <p className={styles.iconame}>迷妹</p>
                            </li>
                        </ul>

                        <div className={styles.title}>
                            <h3>书评区</h3>
                            <div className={styles.book_review}>
                                <p className="iconfont icon-shuping"></p>
                                <span>暂无书评</span>
                            </div>
                            <p className={styles.bottom}>写书评,抢沙发</p>
                        </div>

                    </div>
                }
            </div>
        )
    }
}

export default Detail
