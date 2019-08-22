import React, { Component } from 'react';
import styles from './index.module.scss';
import Header from '@/components/Header'
import ctx from '@/assets/js/ctx';

class Classify extends Component {
    static contextType = ctx
    constructor() {
        super()
        this.state = {
            classifyList: [
                {type: "现代言情", typeImg: require('@/assets/images/1.jpg'), num: 357},
                {type: "古代言情", typeImg: require('@/assets/images/2.jpg'), num: 343},
                {type: "豪门总裁", typeImg: require('@/assets/images/3.jpg'), num: 124},
                {type: "玄幻言情", typeImg: require('@/assets/images/4.jpg'), num: 674},
                {type: "穿越架空", typeImg: require('@/assets/images/5.jpg'), num: 345},
                {type: "仙侠奇缘", typeImg: require('@/assets/images/6.jpg'), num: 233},
                {type: "青春灵异", typeImg: require('@/assets/images/7.jpg'), num: 675},
                {type: "科幻网游", typeImg: require('@/assets/images/8.jpg'), num: 376}
            ]
        }
    }

    toClassifyList = (type) => {
        this.props.history.push('/classifylist/' + type)
    }

    render() {
        const {classifyList} = this.state;
        return (
            <div className={styles.classify}>
                <Header title="分类" />
                <ul className={styles.classify_list}>
                    {   
                        classifyList.map((e,i) => {
                            return (
                                <li className={styles.list_item} key={i} onClick={() => this.toClassifyList(e.type)}>
                                    <img className={styles.itemimg} src={e.typeImg} alt=""/>
                                    <div className={styles.text}>
                                        <h3 className={styles.name}>{e.type}</h3>
                                        <p className={styles.num}>{e.num}本</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Classify
