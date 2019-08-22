import React, { Component } from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header';
import ctx from '@/assets/js/ctx';
import BookItem from '@/components/BookItem';


export class FinishBook extends Component {
    static contextType = ctx;
    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    reqNewBook = () => {
        this.context.axios.post('/books/newbooklist', {
            newBook: "完本"
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

    componentDidMount() {
        this.reqNewBook()
    }

    render() {
        const {list} = this.state;
        return (
            <div>
                <Header title="完本"/>
                <div className={styles.booklist}>
                    {
                        list.length !== 0 && list.map((e) => {
                            return  <BookItem item={e} key={e._id} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default FinishBook
