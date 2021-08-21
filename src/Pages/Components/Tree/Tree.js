import React from 'react';
import Item from './_Item';
import {
    Link
} from "react-router-dom"; 

import styles from './tree.scss';

const Tree = ({ stories }) => {
    const componentInfos = stories.map(story => story.componentInfo);

    return (
        <div className={ styles['tree-container'] }>
            <div className={ styles['list-container'] }>
               { 
                    componentInfos.map((info) => 
                        <Link key={ info.name} to={info.path}>
                            <Item> { info.name } </Item>
                        </Link>
                    )
               }
            </div>
        </div>
    )
}

export default Tree;