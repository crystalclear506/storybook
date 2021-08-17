import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 
import classNames from 'classnames';
import Tree from './Components/Tree/Tree';
import Header from './Components/Header/Header';

import CountdownClockStory from './Stories/CountdownClock/CountdownClock.story';
import stories from './AllComponents';
import './app.scss';

const elem = () => {
    const appContainerClass = classNames('app-container');
    const rowClass = classNames('row');
    const footerClass = classNames('footer');
    const leftColumnClass = classNames('left-column', 'column');
    const rightColumnClass = classNames('right-column', 'column');
    const contentClass = classNames('content');

    return (
        <Router>
            <div className={ appContainerClass }>
                <Header/>
                <div className={ rowClass }>
                    <div className={ contentClass }>
                        <div className={ leftColumnClass }>
                            <Tree stories={ stories }/>
                        </div>
                        <div className={ rightColumnClass }>                            
                            <Switch>
                                { 
                                    stories.map((story) => {
                                        const Page = story.page;
                                        return (<Route key={story.componentInfo.path} path={'/' + story.componentInfo.path}> { <CountdownClockStory.page/>} </Route>)
                                    })
                                }
                                <Route path='/'> Select a component to display </Route>
                            </Switch>                            
                        </div>
                    </div>
                </div>
                <div className={ footerClass }></div>
            </div>
        </Router>
    );
}
export default elem;