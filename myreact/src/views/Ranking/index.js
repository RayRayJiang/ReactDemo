import React, { Component } from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';
import ctx from '@/assets/js/ctx';
import classnames from 'classnames';
import BookItem from '@/components/BookItem';


class Ranking extends Component {
    static contextType = ctx;
    constructor() {
        super()
        this.state = {
            rankingType: ["热销榜", "点击榜", "新书榜", "完本榜"],
            type: "热销榜",
            list: []
        }
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
                alert(msg)
            }
        })
    }

    toDetail = (id) => {
        this.props.history.push('/detail/' + id)
    }

    chooseType = (e) => {
        this.setState({
            type: e
        },() => {
            this.reqBookType(this.state.type)
        })
    }

    componentDidMount() {
        this.reqBookType(this.state.type)
    }
    

    render() {
        const {rankingType,type,list} = this.state;
        return (
            <div className={styles.ranking}>
                <Header title="排行榜" />
                <div className={styles.content}>
                    <ul className={styles.right_nav}>
                        {
                            rankingType.map((e,i) => {
                                return  <li className={classnames(styles.nav_li,{[styles.active]:type == e})} key={i} onClick={() => this.chooseType(e)}>{e}</li>
                            })
                        }
                       
                    </ul>
                    <div className={styles.ranklist}>
                        {
                            list.length !== 0 && list.map((e) => {
                                return <BookItem item={e} key={e._id} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Ranking
