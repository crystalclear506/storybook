import React from 'react';
import classNames from 'classnames';
import './dashboard-item.scss';

const DashboardItem = (props) => {
    const dashboardContainerClass = classNames('dashboard-container');
    return (
        <div className={ dashboardContainerClass }>
            <p> { props.title }</p>
            <div> { props.children }</div>
        </div>
    )
}

export default DashboardItem;