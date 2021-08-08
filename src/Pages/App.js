import React from 'react';
import classNames from 'classnames';
import Tree from './Components/Tree/Tree';
import Header from './Components/Header/Header';

import CountdownClockStory from './Stories/CountdownClock/CountdownClockStory';

import './app.scss';

const elem = () => {
    const appContainerClass = classNames('app-container');
    const rowClass = classNames('row');
    const footerClass = classNames('footer');
    const leftColumnClass = classNames('left-column', 'column');
    const rightColumnClass = classNames('right-column', 'column');
    const contentClass = classNames('content');

    let arr = [...Array(100).keys()];

    return (
        <div className={ appContainerClass }>
            <Header/>
            <div className={ rowClass }>
                <div className={ contentClass }>
                    <div className={ leftColumnClass }>
                        <Tree/>
                    </div>
                    <div className={ rightColumnClass }>
                        <CountdownClockStory/>
                    </div>
                </div>
            </div>
            <div className={ footerClass }></div>
        </div>
    );
}
export default elem;