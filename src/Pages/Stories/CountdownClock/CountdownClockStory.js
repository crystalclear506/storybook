import React from 'react';
import Story from '../StoryBase/StoryBase';
import DashboardItem from '../../Components/DashboardItem/DashboardItem';

import CountdownClock from '@crystalclear506/countdown-clock';

const CountdownClockStory = (props) => {
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
        </DashboardItem>
    ];

    return (
        <Story 
            title={ 'Countdown Clock' }
            dashboardItems={ dashboardItems }>
            <CountdownClock ref={ ref }/>
        </Story> 
    );
}

export default CountdownClockStory;