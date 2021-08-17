import React from 'react';
import Item from './_Item';
import classNames from 'classnames';
import {
    Link
} from "react-router-dom"; 

import './tree.scss';

const Tree = ({ stories }) => {
    const treeContainerClass = classNames('tree-container');
    const listContainerClass = classNames('list-container');

    const componentInfos = stories.map(story => story.componentInfo);

    return (
        <div className={ treeContainerClass }>
            <div className={ listContainerClass }>
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