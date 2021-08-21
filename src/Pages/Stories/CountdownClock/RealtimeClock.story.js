import React from 'react';
import Story, { DashboardItem } from '../StoryBase/StoryBase';
import RealtimeClock from '@crystalclear506/realtime-clock';

const ComponentInfo = {
    name: 'Realtime Clock',
    path: 'realtime-clock'
};

const RealtimeClockPage = (props) => {
    const ref = React.createRef();

    return (
        <Story 
            title={ ComponentInfo.name }>
            <RealtimeClock/>
        </Story> 
    );
}

export default { 
    componentInfo: ComponentInfo, 
    page: RealtimeClockPage
};