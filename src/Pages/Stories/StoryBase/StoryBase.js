import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './story-base.scss';
import DashboardItem from '../../Components/DashboardItem/DashboardItem';
export { DashboardItem };

const Story = ({ title, dashboardItems, children }) => {
    return (
        <div className={ styles['story-container'] }>
            <div className={ styles.title }> { title } </div>
            <div className={ styles.preview }> 
                { children }
            </div>
            <div className={ styles.dashboard }> 
                { 
                    dashboardItems ? (
                        dashboardItems.map(
                            (item, index) => React.cloneElement(item, {key: index}) 
                        )
                    ): ''
                }
            </div>
        </div>
    )
}

Story.propTypes = {
    title: PropTypes.string.isRequired,
    dashboardItems: PropTypes.array
}

export default Story;