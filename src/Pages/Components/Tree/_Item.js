import React from 'react';
import classNames from 'classnames';
import styles from './tree.scss';

const Item = ({ children }) => {
    return (
        <div className={ styles.item }> 
            { children } 
        </div>
    )
}

export default Item;