import React,{Component} from 'react';
import styles from './index.module.scss';

class Error extends Component{

    render() {
        return (
            <div className={styles.weberror}>网页没了，老哥！</div>
        )
    }

}

export default Error