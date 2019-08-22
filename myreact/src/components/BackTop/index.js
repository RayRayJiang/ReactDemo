import React, { Component, PureComponent } from 'react';
import styles from './index.module.scss';

/*
    使用纯组件，当props或者state发生改变，就会浅比较改变前后的值
    如果被比较的数据的类型是数组或者对象，那浅比较的只是它的引用地址
    如果被比较的数据一直在变，还不如用回原来的普通组件，因为浅比较涉及到计算，比较消耗性能
    如果需要进行深比较，请在shouldComponentUpdate中添加判断逻辑
*/

class BackTop extends PureComponent {
    constructor(){        
        super()
        this.state = {
            isTop: false
        }
    }

    render() {
        const {icon} = styles;
        return (
            this.state.isTop && <img
                className={icon}
                src={require("@/assets/images/backTop.png")}
                alt=""
                onClick={this.toTop}
            />
        );
    }

    toTop = () => {
        window.scrollTo(0,0);
    }
    
    componentDidMount() {
        window.onscroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.setState({
                isTop: scrollTop > 500
            })
        }
    }

    /*
        当组件销毁，可以在这里解绑当前组件中已绑定的事件
    */
    componentWillUnmount() {
        window.onscroll = null
    }
    
    
}

export default BackTop;