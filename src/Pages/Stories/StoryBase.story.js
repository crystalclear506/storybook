import React from 'react';
import classNames from 'classnames';
import './story-base.scss';
import DashboardItem from '../Components/DashboardItem/DashboardItem';


const Story = () => {
    const previewClass = classNames('preview');
    const dashboardClass = classNames('dashboard');
    const titleClass = classNames('title');
    const storyContainerClass = classNames('story-container');

    return (
        <div className={ storyContainerClass }>
            <div className={ titleClass }> My Component </div>
            <div className={ previewClass }> 
                {  'Game' } 
            </div>
            <div className={ dashboardClass }> 
                <DashboardItem title={ 'Hello' }>
                    <button> Game </button>
                </DashboardItem>
                <DashboardItem title={ 'Hello' } />
                <DashboardItem title={ 'Hello' } />
                <DashboardItem title={ 'Hello' } />
                <DashboardItem title={ 'Hello' } />
                <DashboardItem title={ 'Hello' } />
                <DashboardItem title={ 'Hello' } />
            </div>
        </div>
    )
}

export default Story;