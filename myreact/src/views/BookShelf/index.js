import React, { Component } from 'react';
import styles from './index.module.scss';

export class BookShelf extends Component {
    render() {
        return (
            <div className={styles.bookshelf}>
                书架
            </div>
        )
    }
}

export default BookShelf
