import React, { Component } from 'react';
import styles from './index.module.scss';
import ctx from '@/assets/js/ctx';
import { withRouter } from "react-router-dom";

class BookItem extends Component {
    static contextType = ctx;

    toDetail = (id) => {
        this.props.history.push('/detail/' + id)
    }

    render() {
        const {item} = this.props
        return (
            <div className={styles.book_li} onClick={() => this.toDetail(item._id)}>
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
            </div>
        )
    }
}

export default withRouter(BookItem)
