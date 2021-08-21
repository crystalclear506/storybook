import React from 'react';
import classNames from 'classnames';
import styles from './dashboard-item.scss';

const DashboardItem = (props) => {
    return (
        <div className={ styles['dashboard-item-container'] }>
            <div className={ styles['title-container'] }> { props.title }</div>
            <div className={ styles['body-container'] }>
                { props.children }
            </div>
        </div>
    )
}

export default DashboardItem;