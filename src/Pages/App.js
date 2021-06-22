import React from 'react';
import classNames from 'classnames';
import Tree from './Components/Tree/Tree';
import Header from './Components/Header/Header';
import CountdownClock from '@crystalclear506/countdown-clock';
import Story from './Stories/StoryBase.story';

import './app.scss';

const elem = () => {
    const appContainerClass = classNames('app-container');
    const rowClass = classNames('row');
    const footerClass = classNames('footer');
    const leftColumnClass = classNames('left-column', 'column');
    const rightColumnClass = classNames('right-column', 'column');

    let arr = [...Array(100).keys()];

    return (
        <div className={ appContainerClass }>
            <Header/>
            <div className={ rowClass }>
                <div className={ leftColumnClass }>
                    <Tree/>
                </div>
                <div className={ rightColumnClass }>
                  {
                      <Story />
                  }
                </div>
            </div>
            <div className={ footerClass }></div>
        </div>
    );
}
export default elem;