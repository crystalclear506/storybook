import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './story-base.scss';
import DashboardItem from '../../Components/DashboardItem/DashboardItem';
export { DashboardItem };

const Story = ({ title, dashboardItems, children }) => {
    const previewClass = classNames('preview');
    const dashboardClass = classNames('dashboard');
    const titleClass = classNames('title');
    const storyContainerClass = classNames('story-container');

    return (
        <div className={ storyContainerClass }>
            <div className={ titleClass }> { title } </div>
            <div className={ previewClass }> 
                { children }
            </div>
            <div className={ dashboardClass }> 
                { 
                    dashboardItems ? dashboardItems.map((item) => item) : ''
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