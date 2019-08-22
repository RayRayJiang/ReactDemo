import React, { Component } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import ctx from '@/assets/js/ctx';
import { Toast } from 'antd-mobile';
import { withRouter } from "react-router-dom";

class SlideModule extends Component {

    static contextType = ctx;
    constructor() {
        super()
        this.state = {
            typeName: "",
            list: []
        }
    }

    chooseType = (item) => {
        this.setState({
            typeName: item,
        },() => {
            this.reqBookType(this.state.typeName)
        })
    }

    reqBookType = (typeName) => {
        this.context.axios.post('/books/list', {
            bookType: typeName
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
        if(this.props.typeList){
            this.setState({
                typeName: this.props.typeList[0]
            },() => {
                this.reqBookType(this.state.typeName)
            })
        }else{
            this.reqBookType(this.props.slide)
        }
    }
    
    render() {
        const {slideTitle, typeList} = this.props;
        return (
            <div className={styles.slide_list}>
                {
                    slideTitle && <div className={styles.slide_header}>
                        <h3 className={styles.slide_title}>{slideTitle}</h3>
                    </div>
                }

                {/* 选择类型列表 ,根据需要来控制是否显示*/}
                {
                    typeList && <ul className={styles.type_ul}>
                        {
                            typeList.map((e,i) => {
                                return <li className={classnames(styles.type_li, {[styles.active]: this.state.typeName == e})} key={i} onClick={() => this.chooseType(e)}>{e}</li>
                            })
                        }
                    </ul>
                }

                {/* 滑动图片列表 */}
                {
                    this.state.list.length !== 0 && <ul className={styles.slide_ul}>
                        {
                            this.state.list.map((e,i) => {
                                return ( 
                                    <li className={styles.slide_li} key={i} onClick={() => this.toDetail(e._id)}>
                                        <img className={styles.slide_img} src={this.context.commonUrl + e.bookImg} alt=""/>
                                        <p className={styles.book_name}>{e.bookName}</p>
                                        <p className={styles.writer}>{e.writer}</p>
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

export default withRouter(SlideModule)
