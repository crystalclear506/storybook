import React from 'react';
import classNames from 'classnames';
import './dashboard-item.scss';

const DashboardItem = (props) => {
    const dashboardContainerClass = classNames('dashboard-container');
    const titleContainerClass = classNames('title-container');
    const bodyContainerClass = classNames('body-container')

    return (
        <div className={ dashboardContainerClass }>
            <div className={ titleContainerClass }> { props.title }</div>
            <div className={ bodyContainerClass }>
                { props.children }
            </div>
        </div>
    )
}

export default DashboardItem;