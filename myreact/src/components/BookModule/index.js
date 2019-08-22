import React, { Component } from 'react';
import styles from './index.module.scss';
import ctx from '../../assets/js/ctx';
import {Toast } from 'antd-mobile';
import { withRouter } from "react-router-dom";

class BookModule extends Component {

    static contextType = ctx;
    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    reqNewBook = (typeName) => {
        this.context.axios.post('/books/newlist', {
            newBook: typeName
        }).then((res) => {
            const { code, msg, list} = res;
            if(code == 1){
                this.setState({
                    list: list
                })
            }else{
                Toast.fail(msg,2)
            }
        })
    }

    toDetail = (id) => {
        this.props.history.push('/detail/' + id)
    }

    componentDidMount() {
        this.reqNewBook(this.props.slide)
    }
    
    render() {
        const {bookTitle} = this.props
        return (
            <div className={styles.book_list}>
                <div className={styles.slide_header}>
                    <h3 className={styles.slide_title}>{bookTitle}</h3>
                </div>
                {
                    this.state.list.length !== 0 && <ul className={styles.book_ul}>
                        {
                            this.state.list.map((item,i) => {
                                return(
                                    <li className={styles.book_li} key={i} onClick={() => this.toDetail(item._id)}>
                                        <img className={styles.book_img} src={this.context.commonUrl + item.bookImg} alt=""/>
                                        <div className={styles.book_right}>
                                            <h4 className={styles.book_name}>{item.bookName}</h4>
                                            <p className={styles.book_desc}>{item.bookDesc}</p>
                                            <div className={styles.book_meta}>
                                                <div className={styles.writer}>
                                                    <em className="iconfont icon-icon"></em>
                                                    <span>{item.writer}</span>
                                                </div>
                                                <div className={styles.meta_right}>
                                                    <span className={styles.meta_taga}>{item.bookType}</span>
                                                    <span className={styles.meta_tagb}>{item.bookState}</span>
                                                    <span className={styles.meta_tagc}>{item.bookNum}万</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        )
    }
}

export default withRouter(BookModule)
