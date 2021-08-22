import React from 'react';
import Story, { DashboardItem } from './StoryBase/StoryBase';
import CountdownClock from '@crystalclear506/countdown-clock';

const ComponentInfo = {
    name: 'Countdown Clock',
    path: 'countdown-clock'
};

const CountdownClockPage = (props) => {
    const ref = React.createRef();
    const refInput = React.createRef();

    const setCountdownEnd = (value) => {
        const currentTime = new Date().getTime();
        ref.current.setCountdownEnd(currentTime + value)
    };
    
    const setCustom = () => {
        let value = refInput.current.value;
        value = parseInt(value);

        if (value) {
            setCountdownEnd(value * 1000);
        }
    }

    const setOneMinute = () => {
        setCountdownEnd(1000 * 60);
    }

    const setOneHour = () => {
        setCountdownEnd(1000 * 60 * 60);
    }

    const setSevenDays = () => {
        setCountdownEnd(1000 * 60 * 60 * 24 * 7);
    }

    const setOneYear = () => {
        setCountdownEnd(1000 * 60 * 60 * 24 * 365);
    }

    const dashboardItems = [
        <DashboardItem title={ 'Set timer' }>
            <input ref={ refInput } placeholder="Set seconds"></input>
            <button onClick={ setCustom }> Set value </button>
        </DashboardItem>,
        <DashboardItem title={ 'Set 1 minute' }>
            <button onClick={ setOneMinute }> Set 1 minute </button>
        </DashboardItem>,
        <DashboardItem title={ 'Set 1 hour' }>
            <button onClick={ setOneHour }> Set 1 hour </button>
        </DashboardItem>,
        <DashboardItem title={ 'Set 7 days' }>
            <button onClick={ setSevenDays }> Set 7 days </button>
        </DashboardItem>,
        <DashboardItem title={ 'Set 365 days' }>
            <button onClick={ setOneYear }> Set 365 days </button>
        </DashboardItem>
    ];

    return (
        <Story 
            title={ ComponentInfo.name }
            dashboardItems={ dashboardItems }>
            <CountdownClock ref={ ref }/>
        </Story> 
    );
}

export default { 
    componentInfo: ComponentInfo, 
    page: CountdownClockPage
};