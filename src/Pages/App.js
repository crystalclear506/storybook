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
import Home from './Components/Welcome/Welcome';

import stories from './AllComponents';
import styles from './app.scss';

const elem = () => {
    const leftColumnClass = classNames(styles['left-column'], styles.column);
    const rightColumnClass = classNames(styles['right-column'], styles.column);

    return (
        <Router>
            <div className={styles['app-container']}>
                <Header/>
                <div className={ styles.row }>
                    <div className={ styles.content }>
                        <div className={ leftColumnClass }>
                            <Tree stories={ stories }/>
                        </div>
                        <div className={ rightColumnClass }>                            
                            <Switch>
                                { 
                                    stories.map((story) => {
                                        const Page = story.page;
                                        return (<Route key={story.componentInfo.path} path={'/' + story.componentInfo.path}> { <Page/>} </Route>)
                                    })
                                }
                                <Route path='/'> <Home/> </Route>
                            </Switch>                            
                        </div>
                    </div>
                </div>
                <div className={ styles.footer }></div>
            </div>
        </Router>
    );
}
export default elem;