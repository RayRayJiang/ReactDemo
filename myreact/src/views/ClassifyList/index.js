import React, { Component } from 'react';
import styles from './index.module.scss';
import ctx from '../../assets/js/ctx';
import {Toast } from 'antd-mobile';
import Header from '@/components/Header';
import BookItem from '@/components/BookItem';

export class ClassifyList extends Component {

    static contextType = ctx;

    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    reqBookType = () => {
        const {type} = this.props.match.params
        this.context.axios.post('/books/list', {
            bookType: type
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

    componentDidMount() {
        this.reqBookType();
    }
    

    render() {
        const {list} = this.state;
        const {type} = this.props.match.params
        return (
            <div className={styles.classifylist}>
                <Header title={type} />
                {
                    list.length !== 0 && <div className={styles.classifyitem}>
                        {
                            list.map((e) => {
                                return <BookItem item={e} key={e._id} />
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default ClassifyList
